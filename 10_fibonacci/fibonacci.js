const fibonacci = function(input) {
    const exponent = parseInt(input);
    const phi = (1+Math.sqrt(5))/2;
    //Check input sign
    if(exponent < 0) return "OOPS"; 
    return parseInt((Math.pow(phi, exponent) - Math.pow(-phi, -exponent))/Math.sqrt(5));
};

// Do not edit below this line
module.exports = fibonacci;
