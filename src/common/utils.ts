export const dottedNumber = (int: number) => {
	let newNumber = int.toString();

	if (int >= 1000) {
		newNumber = newNumber.slice(0, -3) + '.' + newNumber.slice(-3);

	}

	if (int >= 1000000) {
		newNumber = newNumber.slice(0, -7) + '.' + newNumber.slice(-7);
	}
	return newNumber;

}