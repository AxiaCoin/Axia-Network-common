"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBase58 = isBase58;

var _is = require("../base32/is.cjs");

var _validate = require("./validate.cjs");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function isBase58(value, ipfsCompat) {
  return (0, _is.testValidator)(_validate.base58Validate, value, ipfsCompat);
}