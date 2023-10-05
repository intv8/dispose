/**
 * This file exports the public API features of the intv8 dispose package.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export * from './exceptions/mod.ts';

export { VERSION } from './version.ts';

export { dispose } from './dispose.ts';

export { assertNotDisposed } from './assert_not_disposed.ts';

export { using, usingAsync } from './using.ts';

export { AbstractDisposable } from './abstract_disposable.ts';

export { DisposablePool } from './disposable_pool.ts';
