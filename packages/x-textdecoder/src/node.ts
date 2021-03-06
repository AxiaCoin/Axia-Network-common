// Copyright 2017-2021 @axia-js/x-textencoder authors & contributors
// SPDX-License-Identifier: Apache-2.0

import util from 'util';

import { xglobal } from '@axia-js/x-global';

export { packageInfo } from './packageInfo';

export const TextDecoder = (
  typeof xglobal.TextDecoder === 'undefined'
    ? util.TextDecoder as unknown as typeof xglobal.TextDecoder
    : xglobal.TextDecoder
);
