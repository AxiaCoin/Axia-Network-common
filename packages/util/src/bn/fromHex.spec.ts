// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isFunction } from '../is/function';
import { bnFromHex } from '.';

describe('bnFromHex', (): void => {
  it('exists as a function', (): void => {
    expect(
      isFunction(bnFromHex)
    ).toEqual(true);
  });
});
