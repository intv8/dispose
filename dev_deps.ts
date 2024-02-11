/**
 * This file re-exports external development dependencies used by the intv8
 * dispose package.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export { describe, it } from 'https://deno.land/std@0.213.0/testing/bdd.ts';

export {
  assert,
  assertEquals,
  assertExists,
  assertStringIncludes,
  assertThrows,
} from 'https://deno.land/std@0.213.0/assert/mod.ts';

export {
  assertSpyCalls,
  spy,
  stub,
} from 'https://deno.land/std@0.213.0/testing/mock.ts';
