// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { cryptoWaitReady } from './crypto';

// start init process immediately
cryptoWaitReady().catch((): void => {
  // shouldn't happen, logged above
});
