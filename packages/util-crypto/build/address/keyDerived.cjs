"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createKeyDerived = createKeyDerived;

var _util = require("@axia-js/util");

var _asU8a = require("../blake2/asU8a.cjs");

var _decode = require("./decode.cjs");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const PREFIX = (0, _util.stringToU8a)('modlpy/utilisuba');

function createKeyDerived(who, index) {
  return (0, _asU8a.blake2AsU8a)((0, _util.u8aConcat)(PREFIX, (0, _decode.decodeAddress)(who), (0, _util.bnToU8a)(index, {
    bitLength: 16,
    isLe: true
  })));
}