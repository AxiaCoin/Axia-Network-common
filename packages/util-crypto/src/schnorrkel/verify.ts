// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@axia-js/util/types';

import { assert, u8aToU8a } from '@axia-js/util';
import { sr25519Verify } from '@axia-js/wasm-crypto';

/**
 * @name schnorrkelVerify
 * @description Verifies the signature of `message`, using the supplied pair
 */
export function schnorrkelVerify (message: HexString | Uint8Array | string, signature: HexString | Uint8Array | string, publicKey: HexString | Uint8Array | string): boolean {
  const publicKeyU8a = u8aToU8a(publicKey);
  const signatureU8a = u8aToU8a(signature);

  assert(publicKeyU8a.length === 32, () => `Invalid publicKey, received ${publicKeyU8a.length} bytes, expected 32`);
  assert(signatureU8a.length === 64, () => `Invalid signature, received ${signatureU8a.length} bytes, expected 64`);

  return sr25519Verify(signatureU8a, u8aToU8a(message), publicKeyU8a);
}
