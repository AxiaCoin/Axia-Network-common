// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { checkMaxMin } from "./util.js";
/**
 * @name bnMax
 * @summary Finds and returns the highest value in an array of BNs.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { bnMax } from '@axia-js/util';
 *
 * bnMax([new BN(1), new BN(3), new BN(2)]).toString(); // => '3'
 * ```
 */

export function bnMax(...items) {
  return checkMaxMin('max', items);
}