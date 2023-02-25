import type { Resolver } from '@valivali/core';
import type { ZodType } from 'zod';

export const zodResolver = <Output>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: ZodType<Output, any, any>,
): Resolver<Output> => {
  return value => schema.parse(value);
};

export { zodResolver as resolver };
