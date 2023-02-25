import { describe, expect, it } from '@jest/globals';
import { valivali } from '@valivali/core';
import * as yup from 'yup';

import { resolver } from '../src';

describe('resolver', () => {
  it('Pass valid value', () => {
    const value = valivali(resolver(yup.string().strict().required()), 'string');
    expect(value).toBe(value);
  });

  it('Pass invalid value', () => {
    expect(() => valivali(resolver(yup.string().strict().required()), 0)).toThrow();
  });
});
