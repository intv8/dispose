/**
 * Contains the class DisposablePool.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { AbstractDisposable } from './abstract_disposable.ts';
import { dispose } from './dispose.ts';

import type { IDisposable } from '../deps.ts';

/** A class for collecting independant {@link IDisposable} objects into a single {@link DisposablePool}. */
export class DisposablePool<T extends { [key: string]: IDisposable }>
  extends AbstractDisposable {
  /** Creates a new instance of {@link DisposablePool}, with the keyed collection of {@link IDisposable} objects, `disposables`, to pool together. */
  constructor(disposables: T) {
    super();

    this._disposables = disposables;
  }

  /** The resources within the {@link DisposablePool}. */
  public get resources(): T | undefined {
    return this._disposables ? { ...this._disposables } : undefined;
  }

  /** A convenience method to use the pool of {@link IDisposable} objects in a callback, disposing of the pool and this {@link DisposablePool} on completion. */
  public use(callback: (disposables: T, self: this) => void): this {
    this.assertNotDisposed();

    const { resources } = this;

    try {
      if (resources) {
        callback(resources, this);
      }
    } finally {
      this.dispose();
    }

    return this;
  }

  /** A convenience method to use the pool of {@link IDisposable} objects in an aynchronous callback, disposing of the pool and this {@link DisposablePool} on completion. */
  async useAsync(
    callback: (disposables: T, self: this) => Promise<void>,
  ): Promise<this> {
    this.assertNotDisposed();

    const { resources } = this;

    try {
      if (resources) {
        await callback(resources, this);
      }
    } finally {
      this.dispose();
    }

    return this;
  }

  /** The pool of {@link IDisposable} objects. */
  protected _disposables: T | undefined;

  /** Disposes the pool of {@link IDisposable} objectss, then disposes this {@link DisposablePool}. */
  protected onDispose(): void {
    this.assertNotDisposed();

    const { resources } = this;

    if (resources) {
      Object.keys(resources).forEach((key) => {
        dispose(resources[key]);
      });
    }

    this._disposables = undefined;
  }
}
