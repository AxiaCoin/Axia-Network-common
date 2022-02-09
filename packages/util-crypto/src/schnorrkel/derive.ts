// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@axia-js/util/types';
import type { Keypair } from '../types';

import { u8aToU8a } from '@axia-js/util';
import { sr25519DeriveKeypairHard, sr25519DeriveKeypairSoft } from '@axia-js/wasm-crypto';

import { schnorrkelKeypairFromU8a } from './keypair/fromU8a';
import { schnorrkelKeypairToU8a } from './keypair/toU8a';

export function schnorrkelDerive (keypair: Keypair, chainCode: HexString | Uint8Array | string, isHard: boolean): Keypair {
  return schnorrkelKeypairFromU8a(
    (isHard
      ? sr25519DeriveKeypairHard
      : sr25519DeriveKeypairSoft
    )(
      schnorrkelKeypairToU8a(keypair),
      u8aToU8a(chainCode)
    )
  );
}
