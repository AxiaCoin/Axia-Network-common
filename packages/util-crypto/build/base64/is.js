// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { base64Validate } from "./validate.js";
export function isBase64(value) {
  try {
    return base64Validate(value);
  } catch (error) {
    return false;
  }
}