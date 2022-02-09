// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { decodeAddress } from "./decode.js";
import { encodeAddress } from "./encode.js";
import { createKeyDerived } from "./keyDerived.js";
/**
 * @name encodeDerivedAddress
 * @summary Creates a derived address as used in Axlib utility.
 * @description
 * Creates a Axlib derived address based on the input address/publicKey and the index supplied.
 */

export function encodeDerivedAddress(who, index, ss58Format) {
  return encodeAddress(createKeyDerived(decodeAddress(who), index), ss58Format);
}