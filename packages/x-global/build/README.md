# @axia-js/x-global

A cross-environment global object. checks for global > self > window > this.

Install it via `yarn add @axia-js/x-global`

```js
import { xglobal } from '@axia-js/x-global';

console.log(typeof xglobal.TextEncoder);
```
