// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
// adapted from https://github.com/multiformats/js-multibase/blob/424709195b46ffb1d6f2f69a7707598ebe751e5e/src/rfc4648.js
import { assert } from '@axia-js/util';
import { BASE32_ALPHABET, BITS_PER_CHAR } from "./bs32.js";
import { base32Validate } from "./validate.js"; // Build the character lookup table:

const LOOKUP = BASE32_ALPHABET.split('').reduce((lookup, char, index) => {
  lookup[char] = index;
  return lookup;
}, {});
/** @internal */

function decode(output, input, offset) {
  let bits = 0;
  let buffer = 0;
  let written = 0;

  for (let i = offset; i < input.length; i++) {
    buffer = buffer << BITS_PER_CHAR | LOOKUP[input[i]];
    bits += BITS_PER_CHAR;

    if (bits >= 8) {
      bits -= 8;
      output[written++] = 0xff & buffer >> bits;
    }
  }

  return [output, bits, buffer];
}
/**
 * @name base32Decode
 * @summary Delookup a base32 value.
 * @description
 * From the provided input, decode the base32 and return the result as an `Uint8Array`.
 */


export function base32Decode(value, ipfsCompat = false) {
  base32Validate(value, ipfsCompat);
  const offset = ipfsCompat ? 1 : 0;
  const [output, bits, buffer] = decode(new Uint8Array((value.length - offset) * BITS_PER_CHAR / 8 | 0), value, offset);
  assert(!(bits >= BITS_PER_CHAR || 0xff & buffer << 8 - bits), 'Unexpected end of data');
  return output;
}