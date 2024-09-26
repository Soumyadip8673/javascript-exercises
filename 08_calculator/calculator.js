const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	ans=0
  arr.forEach(element => {
    ans+=element
  });
  return ans
};

const multiply = function(arr) {
  ans=1
  arr.forEach(element => {
    ans*=element
  });
  return ans
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(n) {
	if (n==0) {
    return 1
  }
  return n*factorial(n-1)
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
