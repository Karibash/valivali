import type { Resolver } from '@valivali/core';
import type { Schema } from 'yup';

export const yupResolver = <Output>(
  schema: Schema<Output>,
): Resolver<Output> => {
  return value => schema.validateSync(value);
};

export { yupResolver as resolver };
