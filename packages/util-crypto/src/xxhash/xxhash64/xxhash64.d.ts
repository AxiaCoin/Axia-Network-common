// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

declare module 'xxhashjs' {
  export interface HashInterface {
    (data: string | Buffer, seed: number): number;
  }

  const h64: HashInterface;

  export = { h64 };
}
