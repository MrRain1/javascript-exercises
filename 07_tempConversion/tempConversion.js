const ftoc = function(tempFahr) {
  let toCelsius = ((tempFahr - 32)*(5/9)).toFixed(1);
   
  return Number(toCelsius);
};

const ctof = function(tempCels) {
  let toFahren = ((tempCels*9/5)+32).toFixed(1);

  return Number(toFahren);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
