// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { testValidator } from "../base32/is.js";
import { base58Validate } from "./validate.js";
export function isBase58(value, ipfsCompat) {
  return testValidator(base58Validate, value, ipfsCompat);
}