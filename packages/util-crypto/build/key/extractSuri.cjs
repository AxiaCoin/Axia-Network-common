"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyExtractSuri = keyExtractSuri;

var _util = require("@axia-js/util");

var _extractPath = require("./extractPath.cjs");

// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
const RE_CAPTURE = /^(\w+( \w+)*)((\/\/?[^/]+)*)(\/\/\/(.*))?$/;
/**
 * @description Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed).
 */

function keyExtractSuri(suri) {
  // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
  const matches = suri.match(RE_CAPTURE);
  (0, _util.assert)(!(0, _util.isNull)(matches), 'Unable to match provided value to a secret URI');
  const [, phrase,, derivePath,,, password] = matches;
  const {
    path
  } = (0, _extractPath.keyExtractPath)(derivePath);
  return {
    derivePath,
    password,
    path,
    phrase
  };
}