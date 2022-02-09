// Copyright 2017-2021 @axia-js/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { detectPackage, packageInfo as utilInfo } from '@axia-js/util';
import { packageInfo as cryptoInfo } from '@axia-js/util-crypto/packageInfo';

import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [utilInfo, cryptoInfo]);
