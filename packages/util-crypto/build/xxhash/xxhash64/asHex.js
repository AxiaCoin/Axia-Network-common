// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { hexAddPrefix } from '@axia-js/util';
import xxhash64AsRaw from "./asRaw.js";
export default function xxhash64AsHex(data, seed) {
  return hexAddPrefix(xxhash64AsRaw(data, seed));
}