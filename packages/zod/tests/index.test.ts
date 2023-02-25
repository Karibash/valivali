import { describe, expect, it } from '@jest/globals';
import { valivali } from '@valivali/core';
import { z } from 'zod';

import { resolver } from '../src';

describe('resolver', () => {
  it('Pass valid value', () => {
    const value = valivali(resolver(z.string()), 'string');
    expect(value).toBe(value);
  });

  it('Pass invalid value', () => {
    expect(() => valivali(resolver(z.string()), 0)).toThrow();
  });
});
