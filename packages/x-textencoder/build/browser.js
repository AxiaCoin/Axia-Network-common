// Copyright 2017-2021 @axia-js/x-textencoder authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { xglobal } from '@axia-js/x-global';
import { TextEncoder as Fallback } from "./fallback.js";
export { packageInfo } from "./packageInfo.js";
export const TextEncoder = typeof xglobal.TextEncoder === 'undefined' ? Fallback : xglobal.TextEncoder;