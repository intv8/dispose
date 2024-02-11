/**
 * This file exports interfaces used by the the intv8 dispose package
 * and its peer and dependant packages.
 *
 * For type aliases, see ./types.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/** Provides a mechanism to dispose of resources associated with the current class. */
export interface IDisposable {
  /** Dispose of resources associated with the current instance. */
  dispose(): void;

  /** A value indicating whether the current instance has been disposed. */
  isDisposed: boolean;
}
