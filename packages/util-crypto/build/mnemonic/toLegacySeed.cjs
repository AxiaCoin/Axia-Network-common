"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mnemonicToLegacySeed = mnemonicToLegacySeed;

var _util = require("@axia-js/util");

var _wasmCrypto = require("@axia-js/wasm-crypto");

var _bip = require("./bip39.cjs");

var _validate = require("./validate.cjs");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name mnemonicToLegacySeed
 * @summary Creates a valid Ethereum/Bitcoin-compatible seed from a mnemonic input
 * @example
 * <BR>
 *
 * ```javascript
 * import { mnemonicGenerate, mnemonicToLegacySeed, mnemonicValidate } from '@axia-js/util-crypto';
 *
 * const mnemonic = mnemonicGenerate(); // => string
 * const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean
 *
 * if (isValidMnemonic) {
 *   console.log(`Seed generated from mnemonic: ${mnemonicToLegacySeed(mnemonic)}`); => u8a
 * }
 * ```
 */
function mnemonicToLegacySeed(mnemonic, password = '', onlyJs = false, byteLength = 32) {
  (0, _util.assert)((0, _validate.mnemonicValidate)(mnemonic), 'Invalid bip39 mnemonic specified');
  (0, _util.assert)([32, 64].includes(byteLength), () => `Invalid seed length ${byteLength}, expected 32 or 64`);

  if (byteLength === 32) {
    return (0, _wasmCrypto.isReady)() && !onlyJs ? (0, _wasmCrypto.bip39ToSeed)(mnemonic, password) : (0, _bip.mnemonicToSeedSync)(mnemonic, password).subarray(0, 32);
  } else if (byteLength === 64) {
    return (0, _bip.mnemonicToSeedSync)(mnemonic, password);
  }

  return new Uint8Array();
}