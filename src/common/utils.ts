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

export const calcGroups = (totalRequested: number, groupSize: number = 1) => {
	return Math.ceil(totalRequested/groupSize);
}

export const trimText = (text: string, chLimit: number) => {
	return text.length > chLimit ? text.slice(0, chLimit) + '...' : text;
};