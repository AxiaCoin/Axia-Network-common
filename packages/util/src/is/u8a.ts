// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isInstanceOf } from './instanceOf';

/**
 * @name isU8a
 * @summary Tests for a `Uint8Array` object instance.
 * @description
 * Checks to see if the input object is an instance of `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isUint8Array } from '@axia-js/util';
 *
 * console.log('isU8a', isU8a([])); // => false
 * ```
 */
export function isU8a (value?: unknown): value is Uint8Array {
  return isInstanceOf(value, Uint8Array);
}
