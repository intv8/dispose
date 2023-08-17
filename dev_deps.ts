/**
 * This file re-exports external development dependencies used by the partic11e
 * dispose package.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Used for creating and setting up the test suite for a feature
export {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from 'https://deno.land/std@0.186.0/testing/bdd.ts';

//  Used for testing feature conditions or error tests not yet implemented
export {
  assert,
  assertEquals,
  assertThrows,
} from 'https://deno.land/std@0.186.0/testing/asserts.ts';

//  Used for mocking dependencies
export {
  assertSpyCalls,
  spy,
  stub,
} from 'https://deno.land/std@0.186.0/testing/mock.ts';

//  Used for cross-package exception testing
export {
  allCodesFixture,
  I11N_EX2_HOST,
  I11N_EX2_PATH,
} from 'https://denopkg.com/partic11e/core-exceptions@dev/__xsys_test_mod.ts';
