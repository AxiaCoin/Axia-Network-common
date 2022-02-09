// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { packageInfo as netInfo } from '@axia-js/networks/packageInfo';
import { detectPackage, packageInfo as utilInfo } from '@axia-js/util';
import { packageInfo as randomInfo } from '@axia-js/x-randomvalues';

import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [netInfo, utilInfo, randomInfo]);
