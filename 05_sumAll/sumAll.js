const sumAll = function(startNumber, elementsToSum) {
    //variabile per contenere la somma dei numeri
    let sum = 0;
    let temp = 0;
    const error= "ERROR";

    //check se tutti i parametri passati sono numeri
    if((Number.isInteger(startNumber)) && (Number.isInteger(elementsToSum))){
    
        //Check for negative numbers
        if(startNumber < 0 || elementsToSum < 0){
            return error;
        }

        //Swap the arguments if the first in grater than the second
        if(startNumber > elementsToSum){
        temp=startNumber;
        startNumber = elementsToSum;
        elementsToSum = temp;
        temp=0;
        }

        //Execute the sum iteration
        for(let counter=startNumber; counter<=elementsToSum; counter++){
        sum = sum + counter; 
        }

        return sum;
    }
    else{
        return error;
    }

};

// Do not edit below this line
module.exports = sumAll;



