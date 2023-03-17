import { valivali } from '@valivali/core';

import type { Resolver } from '@valivali/core';

export const createValidator = <T>(resolver: Resolver<T>) => (value: unknown) => valivali(resolver, value);
