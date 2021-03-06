// Copyright 2017-2021 @axia-js/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { nobody } from "./pair/nobody.js";
import { createTestKeyring } from "./testing.js";
export function createTestPairs(options, isDerived = true) {
  const keyring = createTestKeyring(options, isDerived);
  const pairs = keyring.getPairs();
  const map = {
    nobody: nobody()
  };
  return pairs.reduce((result, pair) => {
    const {
      name
    } = pair.meta;
    result[name] = pair;
    return result;
  }, map);
}