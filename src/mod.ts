/**
 * This file exports the public API features of the partic11e dispose package.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Export public exceptions
export * from './exceptions/mod.ts';

//  Export version
export { VERSION } from './version.ts';

//  Export dispose function
export { dispose } from './dispose.ts';

//  Export assertNotDisposed function
export { assertNotDisposed } from './assert_not_disposed.ts';

//  Export using functions
export { using, usingAsync } from './using.ts';

//  Export AbstractDisposable
export { AbstractDisposable } from './abstract_disposable.ts';

//  Export DisposablePool
export { DisposablePool } from './disposable_pool.ts';
