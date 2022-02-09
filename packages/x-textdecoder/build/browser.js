// Copyright 2017-2021 @axia-js/x-textencoder authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { xglobal } from '@axia-js/x-global';
import { TextDecoder as Fallback } from "./fallback.js";
export { packageInfo } from "./packageInfo.js";
export const TextDecoder = typeof xglobal.TextDecoder === 'undefined' ? Fallback : xglobal.TextDecoder;