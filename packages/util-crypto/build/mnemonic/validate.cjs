"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mnemonicValidate = mnemonicValidate;

var _wasmCrypto = require("@axia-js/wasm-crypto");

var _bip = require("./bip39.cjs");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name mnemonicValidate
 * @summary Validates a mnemonic input using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
 * @example
 * <BR>
 *
 * ```javascript
 * import { mnemonicGenerate, mnemonicValidate } from '@axia-js/util-crypto';
 *
 * const mnemonic = mnemonicGenerate(); // => string
 * const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean
 * ```
 */
function mnemonicValidate(mnemonic, onlyJs = false) {
  return (0, _wasmCrypto.isReady)() && !onlyJs ? (0, _wasmCrypto.bip39Validate)(mnemonic) : (0, _bip.validateMnemonic)(mnemonic);
}