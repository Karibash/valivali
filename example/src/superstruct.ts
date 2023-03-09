import { resolver } from '@valivali/superstruct';
import st from 'superstruct';

import { createValidator } from './helpers/factory';

const validator = createValidator(resolver(st.object({
  id: st.string(),
  name: st.string(),
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
