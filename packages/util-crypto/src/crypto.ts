// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isReady, waitReady } from '@axia-js/wasm-crypto';

export function cryptoIsReady (): boolean {
  return isReady();
}

export function cryptoWaitReady (): Promise<boolean> {
  return waitReady()
    .then((): boolean => true)
    .catch((error): boolean => {
      console.error('Unable to initialize @axia-js/util-crypto', error);

      return false;
    });
}
