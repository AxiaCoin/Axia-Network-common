"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmacSha512 = hmacSha512;

var _sha = require("./sha.cjs");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function hmacSha512(key, data) {
  return (0, _sha.hmacSha)(key, data, true);
}