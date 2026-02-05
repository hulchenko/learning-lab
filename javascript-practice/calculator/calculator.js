function add (a, b) {
	return (a + b);	
}

function subtract (a, b) {
	return (a - b);
}

function sum (array) {
	return array.reduce((total, current) => total + current, 0); //0 is used since 'total' is undefined first circle. 
}

function multiply (array) {
	return array.map
	? array.reduce((accumulator, nextItem) => accumulator * nextItem)
	: 0;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(n) {
		if (n == 0) return 1;
		let num = 1;
		for (let i = n; i > 0; i--) {
		  num *= i;
		}
		return num;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}