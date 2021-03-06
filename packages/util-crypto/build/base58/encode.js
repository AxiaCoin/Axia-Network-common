// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { u8aToU8a } from '@axia-js/util';
import { bs58 } from "./bs58.js";
/**
 * @name base58Encode
 * @summary Creates a base58 value.
 * @description
 * From the provided input, create the base58 and return the result as a string.
 */

export function base58Encode(value, ipfsCompat) {
  const out = bs58.encode(u8aToU8a(value));
  return ipfsCompat ? `z${out}` : out;
}