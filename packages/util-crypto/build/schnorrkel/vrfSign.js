// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { assert, u8aToU8a } from '@axia-js/util';
import { vrfSign } from '@axia-js/wasm-crypto';
const EMPTY_U8A = new Uint8Array();
/**
 * @name schnorrkelVrfSign
 * @description Sign with sr25519 vrf signing (deterministic)
 */

export function schnorrkelVrfSign(message, {
  secretKey
}, context = EMPTY_U8A, extra = EMPTY_U8A) {
  assert((secretKey === null || secretKey === void 0 ? void 0 : secretKey.length) === 64, 'Invalid secretKey, expected 64-bytes');
  return vrfSign(secretKey, u8aToU8a(context), u8aToU8a(message), u8aToU8a(extra));
}