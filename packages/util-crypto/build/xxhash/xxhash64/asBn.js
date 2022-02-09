// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { BN } from '@axia-js/util';
import xxhash64AsRaw from "./asRaw.js";
export default function xxhash64AsBn(data, seed) {
  return new BN(xxhash64AsRaw(data, seed), 16);
}