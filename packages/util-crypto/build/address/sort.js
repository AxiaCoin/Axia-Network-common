// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { u8aSorted } from '@axia-js/util';
import { decodeAddress } from "./decode.js";
import { encodeAddress } from "./encode.js";
export function sortAddresses(addresses, ss58Format) {
  return u8aSorted(addresses.map(who => decodeAddress(who))).map(u8a => encodeAddress(u8a, ss58Format));
}