"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBoolean = isBoolean;

// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isBoolean
 * @summary Tests for a boolean value.
 * @description
 * Checks to see if the input value is a JavaScript boolean.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isBoolean } from '@axia-js/util';
 *
 * isBoolean(false); // => true
 * ```
 */
function isBoolean(value) {
  return typeof value === 'boolean';
}