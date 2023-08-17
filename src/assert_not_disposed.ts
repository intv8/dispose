/**
 * This file exports the assertNotDisposed function.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { ObjectDisposedException } from './exceptions/object_disposed_exception.ts';

import type { IDisposable } from '../deps.ts';

/** Asserts that the specified object is not disposed, optionally with a specific `message`. */
export function assertNotDisposed(
  disposable: IDisposable,
  message?: string,
): void {
  if (disposable.isDisposed) {
    const objectName = disposable.constructor.name;
    const exception = message
      ? new ObjectDisposedException(message, {
        objectName,
      })
      : new ObjectDisposedException({ objectName });

    throw exception;
  }
}
