"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexHasPrefix = hexHasPrefix;

var _hex = require("../is/hex.cjs");

// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name hexHasPrefix
 * @summary Tests for the existence of a `0x` prefix.
 * @description
 * Checks for a valid hex input value and if the start matched `0x`
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexHasPrefix } from '@axia-js/util';
 *
 * console.log('has prefix', hexHasPrefix('0x1234')); // => true
 * ```
 */
function hexHasPrefix(value) {
  return !!(value && (0, _hex.isHex)(value, -1, true) && value.substr(0, 2) === '0x');
}