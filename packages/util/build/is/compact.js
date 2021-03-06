// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { isFunction } from "./function.js";

/**
 * @name isCompact
 * @summary Tests for SCALE-Compact-like object instance.
 */
export function isCompact(value) {
  return isFunction(value.toBigInt) && isFunction(value.toBn) && isFunction(value.toNumber) && isFunction(value.unwrap);
}