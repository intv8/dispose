/**
 * This file exports the ObjectDisposedException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { type BaseExceptionInit, InvalidException } from '../../deps.ts';

/** The default message for the {@link ObjectDisposedException} exception. */
const DEFAULT_MESSAGE = 'An action was attempted on a disposed object.';

/** The exception init properties for the {@link ObjectDisposedException} exception. */
export type ObjectDisposedExceptionInit = BaseExceptionInit<{
  /** The name of the disposed object. */
  objectName?: string;
}>;

/** Creates a message from the provided {@link ObjectDisposedExceptionInit} properties. */
function createMsgFromInit(init: ObjectDisposedExceptionInit): string {
  const { objectName } = init;

  return objectName
    ? `An action was attempted on the disposed object "${objectName}".`
    : DEFAULT_MESSAGE;
}

/** An exception raised when an attempt is made to access resources of a disposed object. */
export class ObjectDisposedException<
  T extends ObjectDisposedExceptionInit = ObjectDisposedExceptionInit,
> extends InvalidException<T> {
  /** Creates a new {@link ObjectDisposedException} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link ObjectDisposedException} exception with a message created from the provided {@link ObjectDisposedExceptionInit} properties. */
  constructor(init: T);

  /** Creates a new {@link ObjectDisposedException} exception with the provided message, optionally with additional {@link ObjectDisposedExceptionInit} properties. */
  constructor(message: string, init?: T);

  //  Constructor overload implementation
  //  deno-lint-ignore default-param-last
  constructor(msgOrInit: string | T = DEFAULT_MESSAGE, maybeInit?: T) {
    let message: string = msgOrInit as string;
    let init: T | undefined = maybeInit;

    if (typeof msgOrInit !== 'string') {
      init = msgOrInit;
      message = createMsgFromInit(init);
    }

    super(message ? message : DEFAULT_MESSAGE, init);
  }

  /** The exception code for the {@link ObjectDisposedException} exception. */
  public code = 0x20;
}
