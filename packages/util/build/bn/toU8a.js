import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { isNumber } from "../is/number.js";
import { bnToBn } from "./toBn.js";

function createEmpty(byteLength, options) {
  return options.bitLength === -1 ? new Uint8Array() : new Uint8Array(byteLength);
}

function createValue(valueBn, byteLength, {
  isLe,
  isNegative
}) {
  const output = new Uint8Array(byteLength);
  const bn = isNegative ? valueBn.toTwos(byteLength * 8) : valueBn;
  output.set(bn.toArray(isLe ? 'le' : 'be', byteLength), 0);
  return output;
}
/**
 * @name bnToU8a
 * @summary Creates a Uint8Array object from a BN.
 * @description
 * `null`/`undefined`/`NaN` inputs returns an empty `Uint8Array` result. `BN` input values return the actual bytes value converted to a `Uint8Array`. Optionally convert using little-endian format if `isLE` is set.
 * @example
 * <BR>
 *
 * ```javascript
 * import { bnToU8a } from '@axia-js/util';
 *
 * bnToU8a(new BN(0x1234)); // => [0x12, 0x34]
 * ```
 */


function bnToU8a(value, arg1 = {
  bitLength: -1,
  isLe: true,
  isNegative: false
}, arg2) {
  const options = _objectSpread({
    bitLength: -1,
    isLe: true,
    isNegative: false
  }, isNumber(arg1) ? {
    bitLength: arg1,
    isLe: arg2
  } : arg1);

  const valueBn = bnToBn(value);
  const byteLength = options.bitLength === -1 ? Math.ceil(valueBn.bitLength() / 8) : Math.ceil((options.bitLength || 0) / 8);
  return value ? createValue(valueBn, byteLength, options) : createEmpty(byteLength, options);
}

export { bnToU8a };