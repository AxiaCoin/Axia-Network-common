// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { hexToBn } from "../hex/toBn.js";
import { isBigInt } from "../is/bigInt.js";
import { isHex } from "../is/hex.js";
import { isToBn } from "../is/toBn.js";
import { BN } from "./bn.js";
/**
 * @name bnToBn
 * @summary Creates a BN value from a BN, bigint, string (base 10 or hex) or number input.
 * @description
 * `null` inputs returns a `0x0` result, BN values returns the value, numbers returns a BN representation.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { bnToBn } from '@axia-js/util';
 *
 * bnToBn(0x1234); // => BN(0x1234)
 * bnToBn(new BN(0x1234)); // => BN(0x1234)
 * ```
 */

export function bnToBn(value) {
  if (!value) {
    return new BN(0);
  } else if (isHex(value)) {
    return hexToBn(value.toString());
  } else if (isBigInt(value)) {
    return new BN(value.toString());
  }

  return BN.isBN(value) ? value : isToBn(value) ? value.toBn() : new BN(value);
}