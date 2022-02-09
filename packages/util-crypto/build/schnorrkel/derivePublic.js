// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { assert, u8aToU8a } from '@axia-js/util';
import { sr25519DerivePublicSoft } from '@axia-js/wasm-crypto';
export function schnorrkelDerivePublic(publicKey, chainCode) {
  const publicKeyU8a = u8aToU8a(publicKey);
  assert(publicKeyU8a.length === 32, () => `Invalid publicKey, received ${publicKeyU8a.length} bytes, expected 32`);
  return sr25519DerivePublicSoft(publicKeyU8a, u8aToU8a(chainCode));
}