// Copyright 2017-2021 @axia-js/x-textencoder authors & contributors
// SPDX-License-Identifier: Apache-2.0
// This is very limited, only handling Ascii values
export class TextDecoder {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-useless-constructor
  constructor(_) {// nothing
  }

  decode(value) {
    return value.reduce((str, code) => {
      return str + String.fromCharCode(code);
    }, '');
  }

}