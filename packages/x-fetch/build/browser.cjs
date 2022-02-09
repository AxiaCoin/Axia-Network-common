"use strict";

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

var _xGlobal = require("@axia-js/x-global");

var _packageInfo = require("./packageInfo.cjs");

// Copyright 2017-2021 @axia-js/x-fetch authors & contributors
// SPDX-License-Identifier: Apache-2.0
const fetch = _xGlobal.xglobal.fetch;
exports.fetch = fetch;