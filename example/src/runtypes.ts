import { resolver } from '@valivali/runtypes';
import * as rt from 'runtypes';

import { createValidator } from './helpers/factory';

const validator = createValidator(resolver(rt.Record({
  id: rt.String,
  name: rt.String,
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
