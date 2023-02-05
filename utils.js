export const getContainer = () => {
	const [container] = document.getElementsByClassName('container');
	return container;
};

/**
 * Generates a unique key based on the given x and y coordinates.
 *
 * @param {number} i - The x coordinate.
 * @param {number} j - The y coordinate.
 * @returns {string} The generated unique key.
 * @throws Will throw an error if either i is more than the number of columns or j is more than the number of rows.
 */
export const generateKey = (i, j, columns, rows) => {
	if (i > columns || j > rows) {
		throw new Error(`Error: Invalid coordinates. i: ${i}, j: ${j}`);
	}
	return `${i}-${j}`;
};

export const getDimension = (el) => {
	return el.getBoundingClientRect();
};

export const dummyAPI = (url) => {
	return new Promise((resolve, reject) => {
		const min = 5,
			max = 10;
		const randomNumber = generateRandomNumber(min, max);
		setTimeout(() => {
			resolve({
				dummyUrl: 'https://www.google.com',
			});
		}, randomNumber * 1000);
	});
};

const generateRandomNumber = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomIntFromInterval = (min, max) => {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
};
