"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObservable = isObservable;

var _function = require("./function.cjs");

var _object = require("./object.cjs");

// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isBObservable
 * @summary Tests for a `Observable` object instance.
 * @description
 * Checks to see if the input object is an instance of `BN` (bn.js).
 * @example
 * <BR>
 *
 * ```javascript
 * import { isObservable } from '@axia-js/util';
 *
 * console.log('isObservable', isObservable(...));
 * ```
 */
function isObservable(value) {
  return (0, _object.isObject)(value) && (0, _function.isFunction)(value.next);
}