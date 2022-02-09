// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { isReady, waitReady } from '@axia-js/wasm-crypto';
export function cryptoIsReady() {
  return isReady();
}
export function cryptoWaitReady() {
  return waitReady().then(() => true).catch(error => {
    console.error('Unable to initialize @axia-js/util-crypto', error);
    return false;
  });
}