// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { u8aToHex } from '@axia-js/util';
import { randomAsU8a } from "./asU8a.js";
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

export function randomAsHex(length = 32) {
  return u8aToHex(randomAsU8a(length));
}