"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomAsNumber = randomAsNumber;

var _util = require("@axia-js/util");

var _asHex = require("./asHex.cjs");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const BN_53 = new _util.BN(0b11111111111111111111111111111111111111111111111111111);
/**
 * @name randomAsNumber
 * @summary Creates a random number from random bytes.
 * @description
 * Returns a random number generated from the secure bytes.
 * @example
 * <BR>
 *
 * ```javascript
 * import { randomAsNumber } from '@axia-js/util-crypto';
 *
 * randomAsNumber(); // => <random number>
 * ```
 */

function randomAsNumber() {
  return (0, _util.hexToBn)((0, _asHex.randomAsHex)(8)).and(BN_53).toNumber();
}