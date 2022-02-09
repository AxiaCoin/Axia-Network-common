// Copyright 2017-2021 @axia-js/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import camelcase from 'camelcase';
/**
 * @name stringCamelCase
 * @summary Convert a dash/axc/underscore/space separated string/String to camelCase
 */
// eslint-disable-next-line @typescript-eslint/ban-types

export function stringCamelCase(value) {
  return camelcase(value.toString());
}