"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keccakAsU8a = keccakAsU8a;

var _jsSha = _interopRequireDefault(require("js-sha3"));

var _util = require("@axia-js/util");

var _wasmCrypto = require("@axia-js/wasm-crypto");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name keccakAsU8a
 * @summary Creates a keccak Uint8Array from the input.
 * @description
 * From either a `string` or a `Buffer` input, create the keccak and return the result as a `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { keccakAsU8a } from '@axia-js/util-crypto';
 *
 * keccakAsU8a('123'); // => Uint8Array
 * ```
 */
function keccakAsU8a(value, bitLength = 256, onlyJs = false) {
  const is256 = bitLength === 256;
  return (0, _wasmCrypto.isReady)() && is256 && !onlyJs ? (0, _wasmCrypto.keccak256)((0, _util.u8aToU8a)(value)) : new Uint8Array((is256 ? _jsSha.default.keccak256 : _jsSha.default.keccak512).update((0, _util.u8aToU8a)(value)).arrayBuffer());
}