// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@axia-js/util';
import type { HexString } from '@axia-js/util/types';
import type { Prefix } from './types';

import { decodeAddress } from './decode';
import { encodeAddress } from './encode';
import { createKeyDerived } from './keyDerived';

/**
 * @name encodeDerivedAddress
 * @summary Creates a derived address as used in Axlib utility.
 * @description
 * Creates a Axlib derived address based on the input address/publicKey and the index supplied.
 */
export function encodeDerivedAddress (who: HexString | Uint8Array | string, index: bigint | BN | number, ss58Format?: Prefix): string {
  return encodeAddress(createKeyDerived(decodeAddress(who), index), ss58Format);
}
