"use strict";

var array = [1,2,3,4,5,6];


function totalArray(arr){
    var total = 0;

    // for
    for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    }

    //while
    var a = 0;
    while(a < arr.length){
    total += arr[a];a++;
    }

    //forEach
    arr.forEach((item) => {
        total += item;
    });

    //reduce
    return arr.reduce((total,item) => total += item,0)

    return total;
}

console.log(totalArray(array));

