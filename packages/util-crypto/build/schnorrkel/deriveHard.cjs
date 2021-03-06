"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schnorrkelDeriveHard = schnorrkelDeriveHard;

var _derive = require("./derive.cjs");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function schnorrkelDeriveHard(keypair, chainCode) {
  return (0, _derive.schnorrkelDerive)(keypair, chainCode, true);
}