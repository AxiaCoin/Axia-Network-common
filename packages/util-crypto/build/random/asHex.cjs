"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomAsHex = randomAsHex;

var _util = require("@axia-js/util");

var _asU8a = require("./asU8a.cjs");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name randomAsHex
 * @summary Creates a hex string filled with random bytes.
 * @description
 * Returns a hex string with the specified (optional) length filled with random bytes.
 * @example
 * <BR>
 *
 * ```javascript
 * import { randomAsHex } from '@axia-js/util-crypto';
 *
 * randomAsHex(); // => 0x...
 * ```
 */
function randomAsHex(length = 32) {
  return (0, _util.u8aToHex)((0, _asU8a.randomAsU8a)(length));
}