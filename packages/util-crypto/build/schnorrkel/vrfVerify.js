// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { assert, u8aToU8a } from '@axia-js/util';
import { vrfVerify } from '@axia-js/wasm-crypto';
const EMPTY_U8A = new Uint8Array();
/**
 * @name schnorrkelVrfVerify
 * @description Verify with sr25519 vrf verification
 */

export function schnorrkelVrfVerify(message, signOutput, publicKey, context = EMPTY_U8A, extra = EMPTY_U8A) {
  const publicKeyU8a = u8aToU8a(publicKey);
  const proofU8a = u8aToU8a(signOutput);
  assert(publicKeyU8a.length === 32, 'Invalid publicKey, expected 32-bytes');
  assert(proofU8a.length === 96, 'Invalid vrfSign output, expected 96 bytes');
  return vrfVerify(publicKeyU8a, u8aToU8a(context), u8aToU8a(message), u8aToU8a(extra), proofU8a);
}