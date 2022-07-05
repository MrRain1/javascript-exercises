const palindromes = function (inputString) {
    const stringToLowercase = inputString.toLowerCase();
    const strippedString = stringToLowercase.replace(/[.,/#!$%^&*;:{}=-_`~()]/g,"")
                                            .replace(/\s+/g, "");

    for(let i = 0; i < strippedString.length; i++){
        if(strippedString[i] !== strippedString[(strippedString.length)-i-1]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
