// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../../types';

import { u8aConcat } from '@axia-js/util';

export function schnorrkelKeypairToU8a ({ publicKey, secretKey }: Keypair): Uint8Array {
  return u8aConcat(secretKey, publicKey).slice();
}
