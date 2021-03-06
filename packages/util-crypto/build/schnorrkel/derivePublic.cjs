"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schnorrkelDerivePublic = schnorrkelDerivePublic;

var _util = require("@axia-js/util");

var _wasmCrypto = require("@axia-js/wasm-crypto");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function schnorrkelDerivePublic(publicKey, chainCode) {
  const publicKeyU8a = (0, _util.u8aToU8a)(publicKey);
  (0, _util.assert)(publicKeyU8a.length === 32, () => `Invalid publicKey, received ${publicKeyU8a.length} bytes, expected 32`);
  return (0, _wasmCrypto.sr25519DerivePublicSoft)(publicKeyU8a, (0, _util.u8aToU8a)(chainCode));
}