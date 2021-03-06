import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { isNumber } from "../is/number.js";
import { u8aToHex } from "../u8a/index.js";
import { bnToU8a } from "./toU8a.js";
const ZERO_STR = '0x00';

function bnToHex(value, arg1 = {
  bitLength: -1,
  isLe: false,
  isNegative: false
}, arg2) {
  if (!value) {
    return ZERO_STR;
  }

  const _options = _objectSpread({
    isLe: false,
    isNegative: false
  }, isNumber(arg1) ? {
    bitLength: arg1,
    isLe: arg2
  } : arg1);

  return u8aToHex(bnToU8a(value, _options));
}

export { bnToHex };