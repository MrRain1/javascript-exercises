const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	let sum=0;
  for(let i=0; i< a.length; i++){
    sum+=a[i];
  }
  return sum;
};

const multiply = function(a) {
  let mult = 1;
  for(let i=0; i< a.length; i++){
    mult = mult*a[i];
  }
  return mult;
};

const power = function(a,b) {
	return a^b;
};

const factorial = function(a) {
	if(a === 0 || a === 1){
    return 1;
  }
  else if(a < 0){ return -1; }
  else{
    return a*factorial(a-1);
  }
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
