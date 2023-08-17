/**
 * This file exports the using and usingAsync functions.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { dispose } from './dispose.ts';

import type { IDisposable } from '../deps.ts';

/** Performs a `callback` function with the provided `disposable` disposing the `disposable` on completion, returning any exceptions that may have occured during disposal. */
export function using<T extends IDisposable, R>(
  disposable: T,
  callback: (disposable: T) => R,
): R {
  try {
    return callback(disposable);
  } finally {
    dispose(disposable);
  }
}

/** Asynchronously performs a `callback` function with the provided `disposable` disposing the `disposable` on completion, returning any exceptions that may have occured during disposal. */
export async function usingAsync<T extends IDisposable, R>(
  disposable: T,
  callback: (disposable: T) => Promise<R>,
): Promise<R> {
  try {
    return await callback(disposable);
  } finally {
    dispose(disposable);
  }
}
