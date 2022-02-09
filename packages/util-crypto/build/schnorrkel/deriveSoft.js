// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { schnorrkelDerive } from "./derive.js";
export function schnorrkelDeriveSoft(keypair, chainCode) {
  return schnorrkelDerive(keypair, chainCode, false);
}