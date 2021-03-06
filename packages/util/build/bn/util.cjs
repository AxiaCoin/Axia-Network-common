"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkMaxMin = checkMaxMin;

var _assert = require("../assert.cjs");

var _bn = require("./bn.cjs");

// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
function checkMaxMin(type, items) {
  (0, _assert.assert)(items.length >= 1, 'Must provide one or more BN arguments');
  return items.reduce((a, v) => _bn.BN[type](a, v), items[0]);
}