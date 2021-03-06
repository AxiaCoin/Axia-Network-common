// Copyright 2017-2021 @axia-js/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0
import ed2curve from 'ed2curve';
export function convertSecretKeyToCurve25519(secretKey) {
  return ed2curve.convertSecretKey(secretKey);
}
export function convertPublicKeyToCurve25519(publicKey) {
  return ed2curve.convertPublicKey(publicKey);
}