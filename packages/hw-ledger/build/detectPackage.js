// Copyright 2017-2021 @axia-js/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { packageInfo as transportInfo } from '@axia-js/hw-ledger-transports/packageInfo';
import { detectPackage, packageInfo as utilInfo } from '@axia-js/util';
import { packageInfo } from "./packageInfo.js";
detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [transportInfo, utilInfo]);