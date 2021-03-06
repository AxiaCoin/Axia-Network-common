// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { assert, hexToU8a, isHex } from '@axia-js/util';
import { base64Decode } from "../base64/index.js";
import { jsonDecryptData } from "./decryptData.js";
export function jsonDecrypt({
  encoded,
  encoding
}, passphrase) {
  assert(encoded, 'No encrypted data available to decode');
  return jsonDecryptData(isHex(encoded) ? hexToU8a(encoded) : base64Decode(encoded), passphrase, Array.isArray(encoding.type) ? encoding.type : [encoding.type]);
}