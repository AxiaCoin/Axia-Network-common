"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cryptoIsReady = cryptoIsReady;
exports.cryptoWaitReady = cryptoWaitReady;

var _wasmCrypto = require("@axia-js/wasm-crypto");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function cryptoIsReady() {
  return (0, _wasmCrypto.isReady)();
}

function cryptoWaitReady() {
  return (0, _wasmCrypto.waitReady)().then(() => true).catch(error => {
    console.error('Unable to initialize @axia-js/util-crypto', error);
    return false;
  });
}