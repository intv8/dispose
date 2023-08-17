/**
 * This file exports the AbstractDisposable abstract base class.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { assertNotDisposed } from './assert_not_disposed.ts';

import type { IDisposable } from '../deps.ts';

/** An abstract class implementation of the {@link IDisposable} interface. */
export abstract class AbstractDisposable implements IDisposable {
  /** Asserts that `disposable`, an {@link IDisposable} instance, has not been disposed, optionally with a specific `message`. */
  public static assertNotDisposed(
    disposable: IDisposable,
    message?: string,
  ): void {
    assertNotDisposed(disposable, message);
  }

  /** Whether the resource for this {@link AbstractDisposable} have been freed up. */
  public get isDisposed(): boolean {
    return this.stateOfIsDisposed;
  }

  /** Returns the string representation of this {@link AbstractDisposable}. */
  public toString(): string {
    const { isDisposed, constructor } = this;
    return `[object ${constructor.name}{isDisposed: ${isDisposed}}]`;
  }

  /** Initiates the process of freeing up unmanaged resources and finalizing this {@link AbstractDisposable}. */
  public dispose(): void {
    if (this.isDisposed) return;

    try {
      this.onDispose();
    } finally {
      this.stateOfIsDisposed = true;
    }
  }

  /** Internal state for {@link isDisposed}. */
  protected stateOfIsDisposed = false;

  /** Asserts that this object has not been disposed, optionally with a specific `message`. */
  protected assertNotDisposed(message?: string): void {
    AbstractDisposable.assertNotDisposed(this, message);
  }

  /** Free up resources. */
  protected onDispose(): void {}
}
