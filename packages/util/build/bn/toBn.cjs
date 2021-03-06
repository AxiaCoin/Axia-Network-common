"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bnToBn = bnToBn;

var _toBn = require("../hex/toBn.cjs");

var _bigInt = require("../is/bigInt.cjs");

var _hex = require("../is/hex.cjs");

var _toBn2 = require("../is/toBn.cjs");

var _bn = require("./bn.cjs");

// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
function bnToBn(value) {
  if (!value) {
    return new _bn.BN(0);
  } else if ((0, _hex.isHex)(value)) {
    return (0, _toBn.hexToBn)(value.toString());
  } else if ((0, _bigInt.isBigInt)(value)) {
    return new _bn.BN(value.toString());
  }

  return _bn.BN.isBN(value) ? value : (0, _toBn2.isToBn)(value) ? value.toBn() : new _bn.BN(value);
}