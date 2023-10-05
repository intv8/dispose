/**
 * This file re-exports external development dependencies used by the intv8
 * dispose package.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from 'https://deno.land/std@0.203.0/testing/bdd.ts';

export {
  assert,
  assertEquals,
  assertThrows,
} from 'https://deno.land/std@0.203.0/testing/asserts.ts';

export {
  assertSpyCalls,
  spy,
  stub,
} from 'https://deno.land/std@0.203.0/testing/mock.ts';

export {
  allCodesFixture,
  I11N_EX2_HOST,
  I11N_EX2_PATH,
} from 'https://denopkg.com/intv8/core-exceptions@dev/__xsys_test_mod.ts';
