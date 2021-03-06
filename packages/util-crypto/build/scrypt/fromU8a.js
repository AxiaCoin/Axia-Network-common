// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { assert, u8aToBn } from '@axia-js/util';
import { DEFAULT_PARAMS } from "./defaults.js";
export function scryptFromU8a(data) {
  const salt = data.subarray(0, 32);
  const N = u8aToBn(data.subarray(32 + 0, 32 + 4), {
    isLe: true
  }).toNumber();
  const p = u8aToBn(data.subarray(32 + 4, 32 + 8), {
    isLe: true
  }).toNumber();
  const r = u8aToBn(data.subarray(32 + 8, 32 + 12), {
    isLe: true
  }).toNumber(); // FIXME At this moment we assume these to be fixed params, this is not a great idea since we lose flexibility
  // and updates for greater security. However we need some protection against carefully-crafted params that can
  // eat up CPU since these are user inputs. So we need to get very clever here, but atm we only allow the defaults
  // and if no match, bail out

  assert(N === DEFAULT_PARAMS.N && p === DEFAULT_PARAMS.p && r === DEFAULT_PARAMS.r, 'Invalid injected scrypt params found');
  return {
    params: {
      N,
      p,
      r
    },
    salt
  };
}