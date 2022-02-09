"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mnemonicToMiniSecret = mnemonicToMiniSecret;

var _util = require("@axia-js/util");

var _wasmCrypto = require("@axia-js/wasm-crypto");

var _index = require("../pbkdf2/index.cjs");

var _toEntropy = require("./toEntropy.cjs");

var _validate = require("./validate.cjs");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
function mnemonicToMiniSecret(mnemonic, password = '', onlyJs = false) {
  (0, _util.assert)((0, _validate.mnemonicValidate)(mnemonic), 'Invalid bip39 mnemonic specified');

  if ((0, _wasmCrypto.isReady)() && !onlyJs) {
    return (0, _wasmCrypto.bip39ToMiniSecret)(mnemonic, password);
  }

  const entropy = (0, _toEntropy.mnemonicToEntropy)(mnemonic);
  const salt = (0, _util.stringToU8a)(`mnemonic${password}`); // return the first 32 bytes as the seed

  return (0, _index.pbkdf2Encode)(entropy, salt).password.slice(0, 32);
}