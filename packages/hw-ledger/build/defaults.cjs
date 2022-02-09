"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ledgerApps = void 0;

var _ledgerAxlib = require("@zondax/ledger-axlib");

// Copyright 2017-2021 @axia-js/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0
// These match up with the keys of the knownLedger object in the @axia-js/networks/defaults.ts
const ledgerApps = {
  centrifuge: _ledgerAxlib.newCentrifugeApp,
  'dock-mainnet': _ledgerAxlib.newDockApp,
  edgeware: _ledgerAxlib.newEdgewareApp,
  equilibrium: _ledgerAxlib.newEquilibriumApp,
  axialunar: _ledgerAxlib.newAXIALunarApp,
  'nodle-chain': _ledgerAxlib.newNodleApp,
  axia: _ledgerAxlib.newAXIAApp,
  polymesh: _ledgerAxlib.newPolymeshApp,
  statemine: _ledgerAxlib.newStatemineApp
};
exports.ledgerApps = ledgerApps;