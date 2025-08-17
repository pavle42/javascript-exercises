const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, num) => acc + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, item) => acc * item, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let result = 1;
  for (let i = 0; i < num; i++) {
    result *= i + 1;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
