"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomValues = getRandomValues;
Object.defineProperty(exports, "packageInfo", {
  enumerable: true,
  get: function () {
    return _packageInfo.packageInfo;
  }
});

var _crypto = _interopRequireDefault(require("crypto"));

var _packageInfo = require("./packageInfo.cjs");

// Copyright 2017-2021 @axia-js/x-randomvalues authors & contributors
// SPDX-License-Identifier: Apache-2.0
function getRandomValues(arr) {
  return _crypto.default.randomBytes(arr.length).reduce((arr, value, index) => {
    arr[index] = value;
    return arr;
  }, arr);
}