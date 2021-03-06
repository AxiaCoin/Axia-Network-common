"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexStripPrefix = hexStripPrefix;

var _hasPrefix = require("./hasPrefix.cjs");

// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const UNPREFIX_HEX_REGEX = /^[a-fA-F0-9]+$/;
/**
 * @name hexStripPrefix
 * @summary Strips any leading `0x` prefix.
 * @description
 * Tests for the existence of a `0x` prefix, and returns the value without the prefix. Un-prefixed values are returned as-is.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexStripPrefix } from '@axia-js/util';
 *
 * console.log('stripped', hexStripPrefix('0x1234')); // => 1234
 * ```
 */

function hexStripPrefix(value) {
  if (!value) {
    return '';
  } else if ((0, _hasPrefix.hexHasPrefix)(value)) {
    return value.substr(2);
  } else if (UNPREFIX_HEX_REGEX.test(value)) {
    return value;
  }

  throw new Error(`Invalid hex ${value} passed to hexStripPrefix`);
}