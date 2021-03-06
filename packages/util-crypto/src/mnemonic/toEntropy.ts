// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { bip39ToEntropy, isReady } from '@axia-js/wasm-crypto';

import { mnemonicToEntropy as jsToEntropy } from './bip39';

export function mnemonicToEntropy (mnemonic: string, onlyJs = false): Uint8Array {
  return isReady() && !onlyJs
    ? bip39ToEntropy(mnemonic)
    : jsToEntropy(mnemonic);
}
