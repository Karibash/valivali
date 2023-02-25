import type { Resolver } from '@valivali/core';
import type { Runtype } from 'runtypes';

export const runtypesResolver = <Output>(
  schema: Runtype<Output>,
): Resolver<Output> => {
  return value => schema.check(value);
};

export { runtypesResolver as resolver };
