// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import nacl from 'tweetnacl';
import { assert, u8aToU8a } from '@axia-js/util';
import { ed25519Sign, isReady } from '@axia-js/wasm-crypto';
/**
 * @name naclSign
 * @summary Signs a message using the supplied secretKey
 * @description
 * Returns message signature of `message`, using the `secretKey`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclSign } from '@axia-js/util-crypto';
 *
 * naclSign([...], [...]); // => [...]
 * ```
 */

export function naclSign(message, {
  publicKey,
  secretKey
}, onlyJs = false) {
  assert(secretKey, 'Expected a valid secretKey');
  const messageU8a = u8aToU8a(message);
  return isReady() && !onlyJs ? ed25519Sign(publicKey, secretKey.subarray(0, 32), messageU8a) : nacl.sign.detached(messageU8a, secretKey);
}