"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schnorrkelDeriveSoft = schnorrkelDeriveSoft;

var _derive = require("./derive.cjs");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function schnorrkelDeriveSoft(keypair, chainCode) {
  return (0, _derive.schnorrkelDerive)(keypair, chainCode, false);
}