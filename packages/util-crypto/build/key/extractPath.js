// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { assert } from '@axia-js/util';
import { DeriveJunction } from "./DeriveJunction.js";
const RE_JUNCTION = /\/(\/?)([^/]+)/g;

/**
 * @description Extract derivation junctions from the supplied path
 */
export function keyExtractPath(derivePath) {
  const parts = derivePath.match(RE_JUNCTION);
  const path = [];
  let constructed = '';

  if (parts) {
    constructed = parts.join('');
    parts.forEach(value => {
      path.push(DeriveJunction.from(value.substr(1)));
    });
  }

  assert(constructed === derivePath, () => `Re-constructed path "${constructed}" does not match input`);
  return {
    parts,
    path
  };
}