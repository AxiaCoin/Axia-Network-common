// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { u8aToU8a } from '@axia-js/util';
import { sr25519DeriveKeypairHard, sr25519DeriveKeypairSoft } from '@axia-js/wasm-crypto';
import { schnorrkelKeypairFromU8a } from "./keypair/fromU8a.js";
import { schnorrkelKeypairToU8a } from "./keypair/toU8a.js";
export function schnorrkelDerive(keypair, chainCode, isHard) {
  return schnorrkelKeypairFromU8a((isHard ? sr25519DeriveKeypairHard : sr25519DeriveKeypairSoft)(schnorrkelKeypairToU8a(keypair), u8aToU8a(chainCode)));
}