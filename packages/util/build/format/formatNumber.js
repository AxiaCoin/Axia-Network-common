// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { bnToBn } from "../bn/toBn.js";
import { formatDecimal } from "./formatDecimal.js";
export function formatNumber(value) {
  return formatDecimal(bnToBn(value).toString());
}