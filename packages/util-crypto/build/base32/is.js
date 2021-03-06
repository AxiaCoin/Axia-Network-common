// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { base32Validate } from "./validate.js";
export function testValidator(validate, value, ipfsCompat) {
  try {
    return validate(value, ipfsCompat);
  } catch (error) {
    return false;
  }
}
export function isBase32(value, ipfsCompat) {
  return testValidator(base32Validate, value, ipfsCompat);
}