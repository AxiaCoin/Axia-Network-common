"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectPackage = detectPackage;

var _xGlobal = require("@axia-js/x-global");

var _function = require("./is/function.cjs");

var _string = require("./is/string.cjs");

var _assert = require("./assert.cjs");

// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const DEDUPE = 'Either remove and explicitly install matching versions or dedupe using your package manager.\nThe following conflicting packages were found:';
/** @internal */

function getEntry(name) {
  const _global = _xGlobal.xglobal;

  if (!_global.__axiajs) {
    _global.__axiajs = {};
  }

  if (!_global.__axiajs[name]) {
    _global.__axiajs[name] = [];
  }

  return _global.__axiajs[name];
}

function getVersionLength(all) {
  return all.reduce((max, {
    version
  }) => Math.max(max, version.length), 0);
}
/** @internal */


function flattenInfos(all) {
  const verLength = getVersionLength(all);
  return all.map(({
    name,
    version
  }) => `\t${version.padEnd(verLength)}\t${name}`).join('\n');
}
/** @internal */


function flattenVersions(entry) {
  const all = entry.map(version => (0, _string.isString)(version) ? {
    version
  } : version);
  const verLength = getVersionLength(all);
  return all.map(({
    path,
    version
  }) => `\t${version.padEnd(verLength)}\t${!path || path.length < 5 ? '<unknown>' : path}`).join('\n');
}
/** @internal */


function getPath(pathOrFn) {
  if ((0, _function.isFunction)(pathOrFn)) {
    try {
      return pathOrFn() || '';
    } catch (error) {
      return '';
    }
  }

  return pathOrFn || '';
}
/**
 * @name detectPackage
 * @summary Checks that a specific package is only imported once
 */


function detectPackage({
  name,
  version
}, pathOrFn, deps = []) {
  (0, _assert.assert)(name.startsWith('@axia'), () => `Invalid package descriptor ${name}`);
  const entry = getEntry(name);
  entry.push({
    path: getPath(pathOrFn),
    version
  });

  if (entry.length !== 1) {
    console.warn(`${name} has multiple versions, ensure that there is only one installed.\n${DEDUPE}\n${flattenVersions(entry)}`);
  } else {
    const mismatches = deps.filter(d => d && d.version !== version);

    if (mismatches.length) {
      console.warn(`${name} requires direct dependencies exactly matching version ${version}.\n${DEDUPE}\n${flattenInfos(mismatches)}`);
    }
  }
}