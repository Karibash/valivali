import { describe, expect, it } from '@jest/globals';

import { valivali } from '../src';

import type { Resolver } from '../src';

const resolver: Resolver<string> = value => {
  if (typeof value === 'string') return value;
  throw Error();
};

describe('valivali', () => {
  it('Pass valid value', () => {
    const value = valivali(resolver, 'string');
    expect(value).toBe(value);
  });

  it('Pass invalid value', () => {
    expect(() => valivali(resolver, 0)).toThrow();
  });
});
