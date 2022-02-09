// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import nacl from 'tweetnacl';
/**
 * @name naclKeypairFromSecret
 * @summary Creates a new public/secret keypair from a secret.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied secret.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclKeypairFromSecret } from '@axia-js/util-crypto';
 *
 * naclKeypairFromSecret(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */

export function naclKeypairFromSecret(secret) {
  return nacl.sign.keyPair.fromSecretKey(secret);
}