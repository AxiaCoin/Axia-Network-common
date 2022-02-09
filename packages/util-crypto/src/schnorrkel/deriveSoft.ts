// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@axia-js/util/types';
import type { Keypair } from '../types';

import { schnorrkelDerive } from './derive';

export function schnorrkelDeriveSoft (keypair: Keypair, chainCode: HexString | Uint8Array | string): Keypair {
  return schnorrkelDerive(keypair, chainCode, false);
}
