// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { bnToU8a, u8aConcat } from '@axia-js/util';
export function scryptToU8a(salt, {
  N,
  p,
  r
}) {
  return u8aConcat(salt, bnToU8a(N, {
    bitLength: 32,
    isLe: true
  }), bnToU8a(p, {
    bitLength: 32,
    isLe: true
  }), bnToU8a(r, {
    bitLength: 32,
    isLe: true
  }));
}