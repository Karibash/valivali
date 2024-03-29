import { createAssert } from 'typia';

import { createValidator } from './helpers/factory';

const validator = createValidator(createAssert<{
  id: string;
  name: string;
}>());

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
