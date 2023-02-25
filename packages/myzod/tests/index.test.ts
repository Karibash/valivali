import { describe, expect, it } from '@jest/globals';
import { valivali } from '@valivali/core';
import myzod from 'myzod';

import { resolver } from '../src';

describe('resolver', () => {
  it('Pass valid value', () => {
    const value = valivali(resolver(myzod.string()), 'string');
    expect(value).toBe(value);
  });

  it('Pass invalid value', () => {
    expect(() => valivali(resolver(myzod.string()), 0)).toThrow();
  });
});
