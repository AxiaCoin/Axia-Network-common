// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import base64 from 'base64-js';
import { u8aToU8a } from '@axia-js/util';
/**
 * @name base64Encode
 * @summary Creates a base64 value.
 * @description
 * From the provided input, create the base64 and return the result as a string.
 */

export function base64Encode(value) {
  return base64.fromByteArray(u8aToU8a(value));
}