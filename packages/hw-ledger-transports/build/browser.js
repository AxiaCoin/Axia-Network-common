// Copyright 2017-2021 @axia-js/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0
import LedgerWebHid from '@ledgerhq/hw-transport-webhid';
import LedgerWebUsb from '@ledgerhq/hw-transport-webusb';
export { packageInfo } from "./packageInfo.js";
export const transports = [// deprecated
// import LedgerU2F from '@ledgerhq/hw-transport-u2f';
// {
//   create: (): Promise<Transport> =>
//     LedgerU2F.create(),
//   type: 'u2f'
// },
{
  create: () => LedgerWebUsb.create(),
  type: 'webusb'
}, {
  create: () => LedgerWebHid.create(),
  type: 'hid'
}];