"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schnorrkelAgreement = schnorrkelAgreement;

var _util = require("@axia-js/util");

var _wasmCrypto = require("@axia-js/wasm-crypto");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name schnorrkelAgreement
 * @description Key agreement between other's public key and self secret key
 */
function schnorrkelAgreement(secretKey, publicKey) {
  const secretKeyU8a = (0, _util.u8aToU8a)(secretKey);
  const publicKeyU8a = (0, _util.u8aToU8a)(publicKey);
  (0, _util.assert)(publicKeyU8a.length === 32, () => `Invalid publicKey, received ${publicKeyU8a.length} bytes, expected 32`);
  (0, _util.assert)(secretKeyU8a.length === 64, () => `Invalid secretKey, received ${secretKeyU8a.length} bytes, expected 64`);
  return (0, _wasmCrypto.sr25519Agree)(publicKeyU8a, secretKeyU8a);
}