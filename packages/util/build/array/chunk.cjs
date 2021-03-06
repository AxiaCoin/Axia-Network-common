"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayChunk = arrayChunk;

// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name arrayChunk
 * @summary Split T[] into T[][] based on the defind size
 * @description
 * Returns a set ao arrays based on the chunksize
 * @example
 * <BR>
 *
 * ```javascript
 * import { arrayChunk } from '@axia-js/util';
 *
 * arrayChunk([1, 2, 3, 4, 5]); // [[1, 2], [3, 4], [5]]
 * ```
 */
function arrayChunk(array, chunkSize) {
  const outputSize = Math.ceil(array.length / chunkSize);
  const output = Array(outputSize);

  for (let index = 0; index < outputSize; index++) {
    const offset = index * chunkSize;
    output[index] = array.slice(offset, offset + chunkSize);
  }

  return output;
}