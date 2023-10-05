/**
 * This file contains test cases, mocks, or other data for testing the
 * ObjectDisposedException feature.
 *
 * For use in ../object_disposed_exception.test.ts.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../dev_deps.ts';

export const messageFixtures = [
  ['', {
    name: 'ObjectDisposedException',
    message: 'An action was attempted on a disposed object.',
    code: 32,
    asString:
      'ObjectDisposedException [0x20]: An action was attempted on a disposed object.',
    asValue: 32,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x20?message=An%20action%20was%20attempted%20on%20a%20disposed%20object.`,
  }],
  ['The object is disposed.', {
    name: 'ObjectDisposedException',
    message: 'The object is disposed.',
    code: 32,
    asString: 'ObjectDisposedException [0x20]: The object is disposed.',
    asValue: 32,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x20?message=The%20object%20is%20disposed.`,
  }],
] as const;

const init = { objectName: 'example' } as const;

export const initFixtures = [
  [{}, {
    name: 'ObjectDisposedException',
    message: 'An action was attempted on a disposed object.',
    code: 32,
    asString:
      'ObjectDisposedException [0x20]: An action was attempted on a disposed object.',
    asValue: 32,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x20?message=An%20action%20was%20attempted%20on%20a%20disposed%20object.`,
  }],
  [init, {
    name: 'ObjectDisposedException',
    message: 'An action was attempted on the disposed object "example".',
    code: 32,
    asString:
      'ObjectDisposedException [0x20]: An action was attempted on the disposed object "example".',
    asValue: 32,
    cause: undefined,
    data: init,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x20?message=An%20action%20was%20attempted%20on%20the%20disposed%20object%20%22example%22.&data=${
        encodeURIComponent(JSON.stringify(init))
      }`,
  }],
] as const;

const cause0 = new Error('Object is disposed.');

export const messageCauseFixtures = [
  ['Object is disposed.', cause0, {
    name: 'ObjectDisposedException',
    message: 'Object is disposed.',
    code: 32,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x20?message=Object%20is%20disposed.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['Object is disposed.', init, {
    name: 'ObjectDisposedException',
    message: 'Object is disposed.',
    code: 32,
    cause: undefined,
    data: init,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x20?message=Object%20is%20disposed.&data=${
        encodeURIComponent(JSON.stringify(init))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Object is disposed.', { ...init, cause: cause0 }, {
    name: 'ObjectDisposedException',
    message: 'Object is disposed.',
    code: 32,
    cause: cause0,
    data: init,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x20?message=Object%20is%20disposed.&data=${
        encodeURIComponent(JSON.stringify(init))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
