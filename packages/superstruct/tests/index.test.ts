import { describe, expect, it } from '@jest/globals';
import { valivali } from '@valivali/core';
import st from 'superstruct';

import { resolver } from '../src';

describe('resolver', () => {
  it('Pass valid value', () => {
    const value = valivali(resolver(st.string()), 'string');
    expect(value).toBe(value);
  });

  it('Pass invalid value', () => {
    expect(() => valivali(resolver(st.string()), 0)).toThrow();
  });
});
