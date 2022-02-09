// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { u8aToU8a } from '@axia-js/util';
import { isReady, pbkdf2 } from '@axia-js/wasm-crypto';
import { randomAsU8a } from "../random/asU8a.js";
import { pbkdf2Sync } from "./pbkdf2.js";
export function pbkdf2Encode(passphrase, salt = randomAsU8a(), rounds = 2048, onlyJs = false) {
  const u8aPass = u8aToU8a(passphrase);
  const u8aSalt = u8aToU8a(salt);
  const password = isReady() && !onlyJs ? pbkdf2(u8aPass, u8aSalt, rounds) : pbkdf2Sync(u8aPass, u8aSalt, rounds);
  return {
    password,
    rounds,
    salt
  };
}