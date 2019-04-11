import test from 'ava';
import x from './';

test("SHA256", t => {
	t.true(x.test('0c67b2c1fcfba9fb71ff6feae41abd61d591df8ecabebefdba51db4d3cf9f1cf'));
    t.false(x.test('0c67b2c1fcfba9fb71ff6feae41abd61d591df8ecabebefdba51db4d3ct9f1cf'));

});