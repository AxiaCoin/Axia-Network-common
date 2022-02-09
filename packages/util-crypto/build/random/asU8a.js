// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { getRandomValues } from '@axia-js/x-randomvalues';
/**
 * @name randomAsU8a
 * @summary Creates a Uint8Array filled with random bytes.
 * @description
 * Returns a `Uint8Array` with the specified (optional) length filled with random bytes.
 * @example
 * <BR>
 *
 * ```javascript
 * import { randomAsU8a } from '@axia-js/util-crypto';
 *
 * randomAsU8a(); // => Uint8Array([...])
 * ```
 */

export function randomAsU8a(length = 32) {
  return getRandomValues(new Uint8Array(length));
}