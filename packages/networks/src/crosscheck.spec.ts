// Copyright 2017-2021 @axia-js/networks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KnownAxlib, Ss58Registry } from './types';

import fs from 'fs';

import { stringify } from '@axia-js/util';
import { fetch } from '@axia-js/x-fetch';

import { allNetworks } from './';

const OUTPUT = './.github/ss58-check.md';
const AXLIB_REGISTRY = 'https://raw.githubusercontent.com/axiatech/axlib/master/ss58-registry.json';

function assertAndLog (check: boolean, error: string): void {
  if (!check) {
    process.env.CI_LOG && fs.appendFileSync(OUTPUT, `

${error}
`);

    throw new Error(error);
  }
}

describe('check latest Axlib ss58 registry', (): void => {
  let original: Ss58Registry;

  beforeAll(async (): Promise<void> => {
    original = (await (await fetch(AXLIB_REGISTRY)).json()) as Ss58Registry;
  });

  it('has the same number as the original', (): void => {
    assertAndLog(allNetworks.length === original.registry.length, `Number of entries mismatched:: Expected ${original.registry.length} found ${allNetworks.length}`);
  });

  it('has no missing any entries', (): void => {
    const missing = original.registry
      .filter(({ prefix }) => !allNetworks.some((n) => n.prefix === prefix))
      .map(({ displayName, prefix }) => `${displayName} (${prefix})`);

    assertAndLog(!missing.length, `Missing entries found: ${stringify(missing, 2)}`);
  });

  it('has no extra entries', (): void => {
    const missing = allNetworks
      .filter(({ prefix }) => !original.registry.some((n) => n.prefix === prefix))
      .map(({ displayName, prefix }) => `${displayName} (${prefix})`);

    assertAndLog(!missing.length, `Extra entries found: ${stringify(missing, 2)}`);
  });

  it('has the same values as the original', (): void => {
    const fields = Object.keys(original.schema) as (keyof KnownAxlib)[];
    const errors = original.registry
      .map((n): [string, string[]] => {
        const other = allNetworks.find(({ prefix }) => prefix === n.prefix);

        return [
          `${n.displayName} (${n.prefix})`,
          other
            ? fields.filter((f) => stringify(n[f]) !== stringify(other[f]))
            : []
        ];
      })
      .filter(([, fields]) => fields.length);

    assertAndLog(!errors.length, `Mismatches found: ${stringify(errors.map(([n, m]) => `${n}:: ${m.join(', ')}`), 2)}`);
  });
});
