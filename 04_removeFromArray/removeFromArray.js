const removeFromArray = function(inputArray, ...args) {
    //pointer to track the position in the input array
    let pointerInputArray = 0;

    //pointer to track the position in the array that contains the elements to eventually remove
    let pointerArgs = 0;

    //cycle to traverse the array containing the elements to remove
    for(pointerArgs = 0; pointerArgs < args.length; pointerArgs++){

        //cycle to traverse the array containing the inputValues
        for(pointerInputArray = 0; pointerInputArray < inputArray.length; pointerInputArray++){
            
            //confronts the type of element we want to remove with the one in the input array
            if(typeof(inputArray[pointerInputArray]) === typeof(args[pointerArgs])){
                
                //confronts if the element we want to remove is in the array
                if(args[pointerArgs] === inputArray[pointerInputArray]){
                    inputArray.splice(pointerInputArray, 1);
                }
            }
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
