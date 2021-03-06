// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { assert, stringToU8a } from '@axia-js/util';
import { bip39ToMiniSecret, isReady } from '@axia-js/wasm-crypto';
import { pbkdf2Encode } from "../pbkdf2/index.js";
import { mnemonicToEntropy } from "./toEntropy.js";
import { mnemonicValidate } from "./validate.js";
export function mnemonicToMiniSecret(mnemonic, password = '', onlyJs = false) {
  assert(mnemonicValidate(mnemonic), 'Invalid bip39 mnemonic specified');

  if (isReady() && !onlyJs) {
    return bip39ToMiniSecret(mnemonic, password);
  }

  const entropy = mnemonicToEntropy(mnemonic);
  const salt = stringToU8a(`mnemonic${password}`); // return the first 32 bytes as the seed

  return pbkdf2Encode(entropy, salt).password.slice(0, 32);
}