import { resolver } from '@valivali/zod';
import { z } from 'zod';

import { createValidator } from './helpers/factory';

const validator = createValidator(resolver(z.object({
  id: z.string(),
  name: z.string(),
})));

console.group('Pass valid value');
console.log(validator({ id: 'id', name: 'name' }));
console.groupEnd();

console.group('Pass invalid value');
try {
  console.log(validator({ id: 'id' }));
} catch (error) {
  console.log(error);
}
console.groupEnd();
