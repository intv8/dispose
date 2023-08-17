/**
 * This file re-exports external dependencies used by the partic11e dispose package.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Export base types.
export type { IDisposable } from 'https://denopkg.com/partic11e/core-types@dev/mod.ts';

//  Export base exception features.
export {
  type BaseExceptionInit,
  Exception,
  InvalidException,
} from 'https://denopkg.com/partic11e/core-exceptions@dev/mod.ts';
