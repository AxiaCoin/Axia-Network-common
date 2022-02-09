// Copyright 2017-2021 @axia-js/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { Keyring } from "./keyring.js";
export { decodeAddress, encodeAddress, setSS58Format } from '@axia-js/util-crypto';
export * from "./defaults.js";
export { createPair } from "./pair/index.js";
export { packageInfo } from "./packageInfo.js";
export { createTestKeyring } from "./testing.js";
export { createTestPairs } from "./testingPairs.js";
export { Keyring };