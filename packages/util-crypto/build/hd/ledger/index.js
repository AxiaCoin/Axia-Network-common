// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { assert } from '@axia-js/util';
import { mnemonicValidate } from "../../mnemonic/index.js";
import { naclKeypairFromSeed } from "../../nacl/index.js";
import { HARDENED, hdValidatePath } from "../validatePath.js";
import { ledgerDerivePrivate } from "./derivePrivate.js";
import { ledgerMaster } from "./master.js";
export function hdLedger(_mnemonic, path) {
  const parts = _mnemonic.split(' ').map(s => s.trim()).filter(s => s);

  assert([12, 24, 25].includes(parts.length), 'Expected a mnemonic with 24 words (or 25 including a password)');
  const [mnemonic, password] = parts.length === 25 ? [parts.slice(0, 24).join(' '), parts[24]] : [parts.join(' '), ''];
  assert(mnemonicValidate(mnemonic), 'Invalid mnemonic passed to ledger derivation');
  assert(hdValidatePath(path), 'Invalid derivation path');
  return naclKeypairFromSeed(path.split('/').slice(1).map(n => parseInt(n.replace(/'$/, ''), 10)).map(n => n < HARDENED ? n + HARDENED : n).reduce((x, n) => ledgerDerivePrivate(x, n), ledgerMaster(mnemonic, password)).slice(0, 32));
}