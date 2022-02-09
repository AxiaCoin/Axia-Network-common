// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@axia-js/dev/config/jest.cjs');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@axia-js/hw-ledger-transports(.*)$': '<rootDir>/packages/hw-ledger-transports/src/node',
    // eslint-disable-next-line sort-keys
    '@axia-js/hw-ledger(.*)$': '<rootDir>/packages/hw-ledger/src/$1',
    '@axia-js/keyring(.*)$': '<rootDir>/packages/keyring/src/$1',
    '@axia-js/networks(.*)$': '<rootDir>/packages/networks/src/$1',
    '@axia-js/util-(crypto)(.*)$': '<rootDir>/packages/util-$1/src/$2',
    // eslint-disable-next-line sort-keys
    '@axia-js/util(.*)$': '<rootDir>/packages/util/src/$1',
    '@axia-js/x-(fetch|randomvalues|textdecoder|textencoder|ws)(.*)$': '<rootDir>/packages/x-$1/src/node',
    '@axia-js/x-global(.*)$': '<rootDir>/packages/x-global/src/$1',
    '@axia-js/x-rxjs(.*)$': '<rootDir>/packages/x-rxjs/src/$1'
  }
});
