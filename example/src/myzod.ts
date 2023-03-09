import { resolver } from '@valivali/myzod';
import myzod from 'myzod';

import { createValidator } from './helpers/factory';

const validator = createValidator(resolver(myzod.object({
  id: myzod.string(),
  name: myzod.string(),
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
