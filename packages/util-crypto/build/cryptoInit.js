// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { cryptoWaitReady } from "./crypto.js"; // start init process immediately

cryptoWaitReady().catch(() => {// shouldn't happen, logged above
});