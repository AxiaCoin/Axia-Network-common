import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @axia-js/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { assert, u8aConcat, u8aEq, u8aToHex, u8aToU8a } from '@axia-js/util';
import { blake2AsU8a, convertPublicKeyToCurve25519, convertSecretKeyToCurve25519, ethereumEncode, keccakAsU8a, keyExtractPath, keyFromPath, naclKeypairFromSeed as naclFromSeed, naclOpen, naclSeal, naclSign, schnorrkelKeypairFromSeed as schnorrkelFromSeed, schnorrkelSign, schnorrkelVrfSign, schnorrkelVrfVerify, secp256k1Compress, secp256k1Expand, secp256k1KeypairFromSeed as secp256k1FromSeed, secp256k1Sign, signatureVerify } from '@axia-js/util-crypto';
import { decodePair } from "./decode.js";
import { encodePair } from "./encode.js";
import { pairToJson } from "./toJson.js";
const SIG_TYPE_NONE = new Uint8Array();
const TYPE_FROM_SEED = {
  ecdsa: secp256k1FromSeed,
  ed25519: naclFromSeed,
  ethereum: secp256k1FromSeed,
  sr25519: schnorrkelFromSeed
};
const TYPE_PREFIX = {
  ecdsa: new Uint8Array([2]),
  ed25519: new Uint8Array([0]),
  ethereum: new Uint8Array([2]),
  sr25519: new Uint8Array([1])
};
const TYPE_SIGNATURE = {
  ecdsa: (m, p) => secp256k1Sign(m, p, 'blake2'),
  ed25519: naclSign,
  ethereum: (m, p) => secp256k1Sign(m, p, 'keccak'),
  sr25519: schnorrkelSign
};
const TYPE_ADDRESS = {
  ecdsa: p => p.length > 32 ? blake2AsU8a(p) : p,
  ed25519: p => p,
  ethereum: p => p.length === 20 ? p : keccakAsU8a(secp256k1Expand(p)),
  sr25519: p => p
}; // Not 100% correct, since it can be a Uint8Array, but an invalid one - just say "undefined" is anything non-valid

function isLocked(secretKey) {
  return !secretKey || secretKey.length === 0 || secretKey.every(b => b === 0);
}

function vrfHash(proof, context, extra) {
  return blake2AsU8a(u8aConcat(context || '', extra || '', proof));
}
/**
 * @name createPair
 * @summary Creates a keyring pair object
 * @description Creates a keyring pair object with provided account public key, metadata, and encoded arguments.
 * The keyring pair stores the account state including the encoded address and associated metadata.
 *
 * It has properties whose values are functions that may be called to perform account actions:
 *
 * - `address` function retrieves the address associated with the account.
 * - `decodedPkcs8` function is called with the account passphrase and account encoded public key.
 * It decodes the encoded public key using the passphrase provided to obtain the decoded account public key
 * and associated secret key that are then available in memory, and changes the account address stored in the
 * state of the pair to correspond to the address of the decoded public key.
 * - `encodePkcs8` function when provided with the correct passphrase associated with the account pair
 * and when the secret key is in memory (when the account pair is not locked) it returns an encoded
 * public key of the account.
 * - `meta` is the metadata that is stored in the state of the pair, either when it was originally
 * created or set via `setMeta`.
 * - `publicKey` returns the public key stored in memory for the pair.
 * - `sign` may be used to return a signature by signing a provided message with the secret
 * key (if it is in memory) using Nacl.
 * - `toJson` calls another `toJson` function and provides the state of the pair,
 * it generates arguments to be passed to the other `toJson` function including an encoded public key of the account
 * that it generates using the secret key from memory (if it has been made available in memory)
 * and the optionally provided passphrase argument. It passes a third boolean argument to `toJson`
 * indicating whether the public key has been encoded or not (if a passphrase argument was provided then it is encoded).
 * The `toJson` function that it calls returns a JSON object with properties including the `address`
 * and `meta` that are assigned with the values stored in the corresponding state variables of the account pair,
 * an `encoded` property that is assigned with the encoded public key in hex format, and an `encoding`
 * property that indicates whether the public key value of the `encoded` property is encoded or not.
 */


export function createPair({
  toSS58,
  type
}, {
  publicKey,
  secretKey
}, meta = {}, encoded = null, encTypes) {
  const decodePkcs8 = (passphrase, userEncoded) => {
    const decoded = decodePair(passphrase, userEncoded || encoded, encTypes);

    if (decoded.secretKey.length === 64) {
      publicKey = decoded.publicKey;
      secretKey = decoded.secretKey;
    } else {
      const pair = TYPE_FROM_SEED[type](decoded.secretKey);
      publicKey = pair.publicKey;
      secretKey = pair.secretKey;
    }
  };

  const recode = passphrase => {
    isLocked(secretKey) && encoded && decodePkcs8(passphrase, encoded);
    encoded = encodePair({
      publicKey,
      secretKey
    }, passphrase); // re-encode, latest version

    encTypes = undefined; // swap to defaults, latest version follows

    return encoded;
  };

  const encodeAddress = () => {
    const raw = TYPE_ADDRESS[type](publicKey);
    return type === 'ethereum' ? ethereumEncode(raw) : toSS58(raw);
  };

  return {
    get address() {
      return encodeAddress();
    },

    get addressRaw() {
      const raw = TYPE_ADDRESS[type](publicKey);
      return type === 'ethereum' ? raw.slice(-20) : raw;
    },

    get isLocked() {
      return isLocked(secretKey);
    },

    get meta() {
      return meta;
    },

    get publicKey() {
      return publicKey;
    },

    get type() {
      return type;
    },

    // eslint-disable-next-line sort-keys
    decodePkcs8,
    decryptMessage: (encryptedMessageWithNonce, senderPublicKey) => {
      assert(!isLocked(secretKey), 'Cannot encrypt with a locked key pair');
      assert(!['ecdsa', 'ethereum'].includes(type), 'Secp256k1 not supported yet');
      const messageU8a = u8aToU8a(encryptedMessageWithNonce);
      return naclOpen(messageU8a.slice(24, messageU8a.length), messageU8a.slice(0, 24), convertPublicKeyToCurve25519(u8aToU8a(senderPublicKey)), convertSecretKeyToCurve25519(secretKey));
    },
    derive: (suri, meta) => {
      assert(type !== 'ethereum', 'Unable to derive on this keypair');
      assert(!isLocked(secretKey), 'Cannot derive on a locked keypair');
      const {
        path
      } = keyExtractPath(suri);
      const derived = keyFromPath({
        publicKey,
        secretKey
      }, path, type);
      return createPair({
        toSS58,
        type
      }, derived, meta, null);
    },
    encodePkcs8: passphrase => {
      return recode(passphrase);
    },
    encryptMessage: (message, recipientPublicKey, nonceIn) => {
      assert(!isLocked(secretKey), 'Cannot encrypt with a locked key pair');
      assert(!['ecdsa', 'ethereum'].includes(type), 'Secp256k1 not supported yet');
      const {
        nonce,
        sealed
      } = naclSeal(u8aToU8a(message), convertSecretKeyToCurve25519(secretKey), convertPublicKeyToCurve25519(u8aToU8a(recipientPublicKey)), nonceIn);
      return u8aConcat(nonce, sealed);
    },
    lock: () => {
      secretKey = new Uint8Array();
    },
    setMeta: additional => {
      meta = _objectSpread(_objectSpread({}, meta), additional);
    },
    sign: (message, options = {}) => {
      assert(!isLocked(secretKey), 'Cannot sign with a locked key pair');
      return u8aConcat(options.withType ? TYPE_PREFIX[type] : SIG_TYPE_NONE, TYPE_SIGNATURE[type](u8aToU8a(message), {
        publicKey,
        secretKey
      }));
    },
    toJson: passphrase => {
      // NOTE: For ecdsa and ethereum, the publicKey cannot be extracted from the address. For these
      // pass the hex-encoded publicKey through to the address portion of the JSON (before decoding)
      // unless the publicKey is already an address
      const address = ['ecdsa', 'ethereum'].includes(type) ? publicKey.length === 20 ? u8aToHex(publicKey) : u8aToHex(secp256k1Compress(publicKey)) : encodeAddress();
      return pairToJson(type, {
        address,
        meta
      }, recode(passphrase), !!passphrase);
    },
    unlock: passphrase => {
      return decodePkcs8(passphrase);
    },
    verify: (message, signature, signerPublic) => {
      return signatureVerify(message, signature, TYPE_ADDRESS[type](u8aToU8a(signerPublic))).isValid;
    },
    vrfSign: (message, context, extra) => {
      assert(!isLocked(secretKey), 'Cannot sign with a locked key pair');

      if (type === 'sr25519') {
        return schnorrkelVrfSign(message, {
          secretKey
        }, context, extra);
      }

      const proof = TYPE_SIGNATURE[type](u8aToU8a(message), {
        publicKey,
        secretKey
      });
      return u8aConcat(vrfHash(proof, context, extra), proof);
    },
    vrfVerify: (message, vrfResult, signerPublic, context, extra) => {
      if (type === 'sr25519') {
        return schnorrkelVrfVerify(message, vrfResult, publicKey, context, extra);
      }

      const result = signatureVerify(message, u8aConcat(TYPE_PREFIX[type], vrfResult.subarray(32)), TYPE_ADDRESS[type](u8aToU8a(signerPublic)));
      return result.isValid && u8aEq(vrfResult.subarray(0, 32), vrfHash(vrfResult.subarray(32), context, extra));
    }
  };
}