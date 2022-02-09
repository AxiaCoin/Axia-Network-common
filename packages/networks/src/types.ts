// Copyright 2017-2021 @axia-js/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type Icon = 'beachball' | 'empty' | 'jdenticon' | 'axia' | 'axlib';

export interface KnownAxlib {
  decimals: number[] | null,
  displayName: string;
  network: string | null;
  prefix: number;
  standardAccount: '*25519' | 'secp256k1' | null;
  symbols: string[] | null;
  website: string | null;
}

export type KnownIcon = Record<string, Icon>;

export type KnownLedger = Record<string, number>;

export type KnownGenesis = Record<string, string[]>;

export type KnownTestnet = Record<string, true>;

export interface AxlibNetwork extends KnownAxlib {
  genesisHash: string[];
  hasLedgerSupport: boolean;
  icon: Icon;
  isIgnored: boolean;
  slip44?: number | null;
}

export interface Network extends AxlibNetwork {
  network: string;
}

export interface Ss58Registry {
  registry: KnownAxlib[];
  specification: string;
  schema: Record<string, string>;
}
