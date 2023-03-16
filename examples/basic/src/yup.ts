import { resolver } from '@valivali/yup';
import * as yup from 'yup';

import { createValidator } from './helpers/factory';

const validator = createValidator(resolver(yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
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
