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
exports.WebSocket = void 0;

var _websocket = _interopRequireDefault(require("websocket"));

var _xGlobal = require("@axia-js/x-global");

var _packageInfo = require("./packageInfo.cjs");

// Copyright 2017-2021 @axia-js/x-ws authors & contributors
// SPDX-License-Identifier: Apache-2.0
const WebSocket = typeof _xGlobal.xglobal.WebSocket === 'undefined' ? _websocket.default.w3cwebsocket : _xGlobal.xglobal.WebSocket;
exports.WebSocket = WebSocket;