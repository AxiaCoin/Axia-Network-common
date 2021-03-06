"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = stringify;

var _bigInt = require("./is/bigInt.cjs");

// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
function stringify(args, space) {
  return JSON.stringify(args, (_, value) => (0, _bigInt.isBigInt)(value) ? value.toString() : value, space);
}