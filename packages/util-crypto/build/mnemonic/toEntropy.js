// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { bip39ToEntropy, isReady } from '@axia-js/wasm-crypto';
import { mnemonicToEntropy as jsToEntropy } from "./bip39.js";
export function mnemonicToEntropy(mnemonic, onlyJs = false) {
  return isReady() && !onlyJs ? bip39ToEntropy(mnemonic) : jsToEntropy(mnemonic);
}