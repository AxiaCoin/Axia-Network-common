// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Original implementation: https://github.com/axiatech/axia-ui/blob/4858c094684769080f5811f32b081dd7780b0880/src/axia.js#L6
import { assert, isHex, isU8a, u8aToU8a } from '@axia-js/util';
import { base58Decode } from "../base58/decode.js";
import { checkAddressChecksum } from "./checksum.js";
import { defaults } from "./defaults.js";
export function decodeAddress(encoded, ignoreChecksum, ss58Format = -1) {
  assert(encoded, 'Invalid empty address passed');

  if (isU8a(encoded) || isHex(encoded)) {
    return u8aToU8a(encoded);
  }

  try {
    const decoded = base58Decode(encoded);
    assert(defaults.allowedEncodedLengths.includes(decoded.length), 'Invalid decoded address length');
    const [isValid, endPos, ss58Length, ss58Decoded] = checkAddressChecksum(decoded);
    assert(ignoreChecksum || isValid, 'Invalid decoded address checksum');
    assert([-1, ss58Decoded].includes(ss58Format), () => `Expected ss58Format ${ss58Format}, received ${ss58Decoded}`);
    return decoded.slice(ss58Length, endPos);
  } catch (error) {
    throw new Error(`Decoding ${encoded}: ${error.message}`);
  }
}