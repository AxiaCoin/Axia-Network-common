// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { u8aToU8a } from "../u8a/toU8a.js";
import { isString } from "./string.js";
const FORMAT = [9, 10, 13];
/**
 * @name isAscii
 * @summary Tests if the input is printable ASCII
 * @description
 * Checks to see if the input string or Uint8Array is printable ASCII, 32-127 + formatters
 */

export function isAscii(value) {
  return value ? !u8aToU8a(value).some(byte => byte >= 127 || byte < 32 && !FORMAT.includes(byte)) : isString(value);
}