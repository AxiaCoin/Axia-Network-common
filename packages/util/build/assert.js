// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { isFunction } from "./is/function.js";
import { isUndefined } from "./is/undefined.js";

/**
 * @name assert
 * @summary Checks for a valid test, if not Error is thrown.
 * @description
 * Checks that `test` is a truthy value. If value is falsy (`null`, `undefined`, `false`, ...), it throws an Error with the supplied `message`. When `test` passes, `true` is returned.
 * @example
 * <BR>
 *
 * ```javascript
 * const { assert } from '@axia-js/util';
 *
 * assert(true, 'True should be true'); // passes
 * assert(false, 'False should not be true'); // Error thrown
 * assert(false, () => 'message'); // Error with 'message'
 * ```
 */
export function assert(condition, message) {
  if (!condition) {
    throw new Error(isFunction(message) ? message() : message);
  }
}
/**
 * @name assertReturn
 * @summart Returns when the value is not undefined, otherwise throws assertion error
 */

export function assertReturn(value, message) {
  assert(!isUndefined(value), message);
  return value;
}