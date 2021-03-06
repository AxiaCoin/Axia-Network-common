// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { validateChars } from "../base58/validate.js";
import { BASE32_ALPHABET } from "./bs32.js";
const BASE_CONFIG = {
  alphabet: BASE32_ALPHABET,
  ipfsChar: 'b',
  type: 'base32'
};
/**
 * @name base32Validate
 * @summary Validates a base32 value.
 * @description
 * Validates that the supplied value is valid base32
 */

export function base32Validate(value, ipfsCompat) {
  return validateChars(BASE_CONFIG, value, ipfsCompat);
}