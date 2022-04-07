const repeatString = function(strng,num) {
    let concat="";
    if(num<0){
        return 'ERROR';
    }
    else{
        for(let i=0;i<num;i++){
            concat= concat + strng;
        }
    }
    return concat;
};

// Do not edit below this line
module.exports = repeatString;
