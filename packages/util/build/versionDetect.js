// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { xglobal } from '@axia-js/x-global';
import { isFunction } from "./is/function.js";
import { isString } from "./is/string.js";
import { assert } from "./assert.js";
const DEDUPE = 'Either remove and explicitly install matching versions or dedupe using your package manager.\nThe following conflicting packages were found:';
/** @internal */

function getEntry(name) {
  const _global = xglobal;

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
  const all = entry.map(version => isString(version) ? {
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
  if (isFunction(pathOrFn)) {
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


export function detectPackage({
  name,
  version
}, pathOrFn, deps = []) {
  assert(name.startsWith('@axia'), () => `Invalid package descriptor ${name}`);
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