// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { isInstanceOf } from "./instanceOf.js";
/**
 * @name isError
 * @summary Tests for a `Error` object instance.
 * @description
 * Checks to see if the input object is an instance of `Error`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isError } from '@axia-js/util';
 *
 * console.log('isError', isError(new Error('message'))); // => true
 * ```
 */

export function isError(value) {
  return isInstanceOf(value, Error);
}