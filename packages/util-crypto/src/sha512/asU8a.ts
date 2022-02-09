// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import nacl from 'tweetnacl';

import { isReady, sha512 } from '@axia-js/wasm-crypto';

/**
 * @name sha512AsU8a
 * @summary Creates sha-512 hash of the input.
 * @description
 * Returns a sha-512 `Uint8Array` from the supplied data.
 * @example
 * <BR>
 *
 * ```javascript
 * import { sha512AsU8a } from '@axia-js/util-crypto';
 *
 * sha512AsU8a(Uint8Array.from([...])); // => Uint8Array([...])
 * ```
 */
export function sha512AsU8a (data: Uint8Array, onlyJs = false): Uint8Array {
  return isReady() && !onlyJs
    ? sha512(data)
    : nacl.hash(data);
}
