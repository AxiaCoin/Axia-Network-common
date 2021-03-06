// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
// eslint-disable-next-line @typescript-eslint/ban-types

/**
 * @name isFunction
 * @summary Tests for a `function`.
 * @description
 * Checks to see if the input value is a JavaScript function.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isFunction } from '@axia-js/util';
 *
 * isFunction(() => false); // => true
 * ```
 */
export function isFunction(value) {
  return typeof value === 'function';
}