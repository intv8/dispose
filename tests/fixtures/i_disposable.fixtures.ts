/**
 * Test fixtures for the IDisposable interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { IDisposable } from '../../mod.ts';

class DisposableTest implements IDisposable {
  protected stateOfDisposed = false;

  public get isDisposed(): boolean {
    return this.stateOfDisposed;
  }

  public dispose(): void {
    this.stateOfDisposed = true;
  }
}

export const fixtures = [
  [new DisposableTest(), false, true],
] as const;
