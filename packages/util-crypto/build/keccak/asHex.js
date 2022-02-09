// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { u8aToHex } from '@axia-js/util';
import { keccakAsU8a } from "./asU8a.js";
/**
 * @name keccakAsHex
 * @summary Creates a keccak hex string from the input.
 * @description
 * From either a `string` or a `Buffer` input, create the keccak and return the result as a `0x` prefixed hex string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { keccakAsHex } from '@axia-js/util-crypto';
 *
 * keccakAsHex('123'); // => 0x...
 * ```
 */

export function keccakAsHex(value, bitLength) {
  return u8aToHex(keccakAsU8a(value, bitLength));
}