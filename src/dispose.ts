/**
 * This file exports the dispose function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

//  Import disposeInternal
import { disposeInternal } from './_internals/mod.ts';

//  Import types
import type { Exception, IDisposable } from '../deps.ts';

/** Disposes an array of {@link IDisposable} objects returning any exceptions that may have occrred during disposal. */
export function dispose(
  ...disposables: IDisposable[]
): (Error | Exception)[] | undefined {
  return disposeInternal(disposables);
}
