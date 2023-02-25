import { describe, expect, it } from '@jest/globals';
import { valivali } from '@valivali/core';
import * as rt from 'runtypes';

import { resolver } from '../src';

describe('resolver', () => {
  it('Pass valid value', () => {
    const value = valivali(resolver(rt.String), 'string');
    expect(value).toBe(value);
  });

  it('Pass invalid value', () => {
    expect(() => valivali(resolver(rt.String), 0)).toThrow();
  });
});
