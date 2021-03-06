"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "packageInfo", {
  enumerable: true,
  get: function () {
    return _packageInfo.packageInfo;
  }
});
exports.fetch = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _xGlobal = require("@axia-js/x-global");

var _packageInfo = require("./packageInfo.cjs");

// Copyright 2017-2021 @axia-js/x-fetch authors & contributors
// SPDX-License-Identifier: Apache-2.0
const fetch = typeof _xGlobal.xglobal.fetch === 'undefined' ? _nodeFetch.default : _xGlobal.xglobal.fetch;
exports.fetch = fetch;