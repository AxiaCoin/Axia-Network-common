// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../types';

import { assert } from '@axia-js/util';

import { naclDeriveHard } from '../nacl/deriveHard';
import { naclKeypairFromSeed } from '../nacl/keypair/fromSeed';
import { DeriveJunction } from './DeriveJunction';

export function keyHdkdEd25519 (keypair: Keypair, { chainCode, isHard }: DeriveJunction): Keypair {
  assert(isHard, 'A soft key was found in the path (and is unsupported)');

  return naclKeypairFromSeed(
    naclDeriveHard(keypair.secretKey.subarray(0, 32), chainCode)
  );
}
