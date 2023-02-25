import type { Resolver } from '@valivali/core';
import type { Struct } from 'superstruct';

export const superstructResolver = <Output>(
  schema: Struct<Output>,
): Resolver<Output> => {
  return value => schema.create(value);
};

export { superstructResolver as resolver };
