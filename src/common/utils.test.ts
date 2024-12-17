import { dottedNumber } from './utils';

describe('dottedNumber', () => {
	test('should return the same number as a string if less than 1000', () => {
		expect(dottedNumber(100)).toEqual('100')
	})

	test('should return the number with a dot at the thousand', () => {
		expect(dottedNumber(1000)).toEqual('1.000')
	})

	test('should return the number with a dot at the thousand and at the million', () => {
		expect(dottedNumber(1000000)).toEqual('1.000.000')
	})
})

describe.skip('', () => {

})