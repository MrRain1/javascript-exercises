const reverseString = function(strng) {
    //array vuoto da ritronare con la stringa in ingresso invertita
    let array = [];
    //trasformo la stringa in un array
    let stringToArray = strng.split("");

    //Ciclo per inserire come nuovo elemento una lettera della stringa in ordine inverso
    for(let i=0; i<stringToArray.length; i++){
        array.push(stringToArray[(stringToArray.length)-i-1]);
    }

    //unisco i termini dell'array in una stringa non separata da altri caratteri
    return array.join("");
};

// Do not edit below this line
module.exports = reverseString;

