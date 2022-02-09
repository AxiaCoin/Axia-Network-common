// Copyright 2017-2021 @axia-js/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { newCentrifugeApp, newDockApp, newEdgewareApp, newEquilibriumApp, newAXIALunarApp, newNodleApp, newAXIAApp, newPolymeshApp, newStatemineApp } from '@zondax/ledger-axlib'; // These match up with the keys of the knownLedger object in the @axia-js/networks/defaults.ts

export const ledgerApps = {
  centrifuge: newCentrifugeApp,
  'dock-mainnet': newDockApp,
  edgeware: newEdgewareApp,
  equilibrium: newEquilibriumApp,
  axialunar: newAXIALunarApp,
  'nodle-chain': newNodleApp,
  axia: newAXIAApp,
  polymesh: newPolymeshApp,
  statemine: newStatemineApp
};