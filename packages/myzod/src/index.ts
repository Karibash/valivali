import type { Resolver } from '@valivali/core';
import type { Type } from 'myzod';

export const myzodResolver = <Output>(
  schema: Type<Output>,
): Resolver<Output> => {
  return value => schema.parse(value);
};

export { myzodResolver as resolver };
