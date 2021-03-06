"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyFromPath = keyFromPath;

var _hdkdEcdsa = require("./hdkdEcdsa.cjs");

var _hdkdEd = require("./hdkdEd25519.cjs");

var _hdkdSr = require("./hdkdSr25519.cjs");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const generators = {
  ecdsa: _hdkdEcdsa.keyHdkdEcdsa,
  ed25519: _hdkdEd.keyHdkdEd25519,
  // FIXME This is Axlib-compatible, not Ethereum-compatible
  ethereum: _hdkdEcdsa.keyHdkdEcdsa,
  sr25519: _hdkdSr.keyHdkdSr25519
};

function keyFromPath(pair, path, type) {
  const keyHdkd = generators[type];
  return path.reduce((pair, junction) => {
    return keyHdkd(pair, junction);
  }, pair);
}