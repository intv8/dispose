/**
 * This file exports the disposeInternal function.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

//  Import types
import type { Exception, IDisposable } from '../../deps.ts';

/** Disposes an array of {@link IDisposable} objects, returning any exceptions that may have occrred during disposal. */
export function disposeInternal(
  disposables: IDisposable[],
): (Error | Exception)[] | undefined {
  const exceptions: (Error | Exception)[] = [];

  for (let i = 0; i < disposables.length; i++) {
    const disposable = disposables[i];
    const ex = disposeInternalOne(disposable);

    if (ex) exceptions.push(ex);

    continue;
  }

  return exceptions.length ? exceptions : undefined;
}

/** Disposes an {@link IDisposable} object, returning the exception that occurred, if any, during disposal. */
function disposeInternalOne(
  disposable: IDisposable,
): Error | Exception | undefined {
  try {
    disposable.dispose();

    return;
  } catch (err) {
    return err;
  }
}
