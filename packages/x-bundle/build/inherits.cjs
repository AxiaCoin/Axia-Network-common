"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inherits;

// Copyright 2017-2021 @axia-js/x-bundle authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Adapted from https://github.com/isaacs/inherits/blob/dbade4c47c548aa7259017eca8874d61c8aaad2b/inherits_browser.js
// The ISC License
// Copyright (c) Isaac Z. Schlueter
function inherits(ctor, superCtor) {
  if (superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        configurable: true,
        enumerable: false,
        value: ctor,
        writable: true
      }
    });
  }
}