"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schnorrkelDerive = schnorrkelDerive;

var _util = require("@axia-js/util");

var _wasmCrypto = require("@axia-js/wasm-crypto");

var _fromU8a = require("./keypair/fromU8a.cjs");

var _toU8a = require("./keypair/toU8a.cjs");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function schnorrkelDerive(keypair, chainCode, isHard) {
  return (0, _fromU8a.schnorrkelKeypairFromU8a)((isHard ? _wasmCrypto.sr25519DeriveKeypairHard : _wasmCrypto.sr25519DeriveKeypairSoft)((0, _toU8a.schnorrkelKeypairToU8a)(keypair), (0, _util.u8aToU8a)(chainCode)));
}