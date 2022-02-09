// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { assert, u8aToU8a } from '@axia-js/util';
import { sr25519Sign } from '@axia-js/wasm-crypto';
/**
 * @name schnorrkelSign
 * @description Returns message signature of `message`, using the supplied pair
 */

export function schnorrkelSign(message, {
  publicKey,
  secretKey
}) {
  assert((publicKey === null || publicKey === void 0 ? void 0 : publicKey.length) === 32, 'Expected a valid publicKey, 32-bytes');
  assert((secretKey === null || secretKey === void 0 ? void 0 : secretKey.length) === 64, 'Expected a valid secretKey, 64-bytes');
  return sr25519Sign(publicKey, secretKey, u8aToU8a(message));
}