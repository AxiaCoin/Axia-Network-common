"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = xxhash64AsBn;

var _util = require("@axia-js/util");

var _asRaw = _interopRequireDefault(require("./asRaw.cjs"));

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function xxhash64AsBn(data, seed) {
  return new _util.BN((0, _asRaw.default)(data, seed), 16);
}