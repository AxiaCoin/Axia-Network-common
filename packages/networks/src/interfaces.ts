// Copyright 2017-2021 @axia-js/networks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Network, AxlibNetwork } from './types';

import { knownGenesis, knownIcon, knownLedger, knownTestnet } from './defaults';
import { knownAxlib } from './axlib';

// These are known prefixes that are not sorted
const UNSORTED = [0, 2, 42];

export const allNetworks = knownAxlib.map((o): AxlibNetwork => {
  const network = o.network || '';
  const n = o as AxlibNetwork;

  n.slip44 = knownLedger[network];
  n.hasLedgerSupport = !!n.slip44;

  n.genesisHash = knownGenesis[network] || [];
  n.icon = knownIcon[network] || 'axlib';
  n.isIgnored = !network || !!knownTestnet[network] || network.startsWith('reserved');

  return n;
});

// The list of available/claimed prefixes
//   - no testnets
//   - we only include those where we have a standardAccount
//   - sort by name, however we keep 0, 2, 42 first in the list
export const availableNetworks = allNetworks
  .filter((n): n is Network => !n.isIgnored && !!n.network)
  .sort((a, b) =>
    UNSORTED.includes(a.prefix) === UNSORTED.includes(b.prefix)
      ? 0
      : UNSORTED.includes(a.prefix)
        ? -1
        : UNSORTED.includes(b.prefix)
          ? 1
          : a.displayName.localeCompare(b.displayName)
  );

// A filtered list of those chains we have details about (genesisHashes)
export const selectableNetworks = availableNetworks.filter((n) => n.genesisHash.length || n.prefix === 42);
