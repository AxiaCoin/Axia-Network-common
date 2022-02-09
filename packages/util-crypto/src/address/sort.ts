// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@axia-js/util/types';
import type { Prefix } from './types';

import { u8aSorted } from '@axia-js/util';

import { decodeAddress } from './decode';
import { encodeAddress } from './encode';

export function sortAddresses (addresses: (HexString | Uint8Array | string)[], ss58Format?: Prefix): string[] {
  return u8aSorted(
    addresses.map((who) => decodeAddress(who))
  ).map((u8a) => encodeAddress(u8a, ss58Format));
}
