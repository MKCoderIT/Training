"use strict"

/* Practice (1) */
/* (1) */
const maxNumber1 = (a , b , c) => {
    let result = a >= b ? a >= c ? a : c : b >= c ? b : c
    console.log("The largest number : " + result);
}
/* (2) */
const maxNumber2 = (a , b , c , ...d) => {
    let listArge = [a,b,c,...d];
    let listleng = listArge.length;
    let result = 0;

    for (let i = 0; i < listleng; i++) {
        for (let j = 0; j < listleng; j++) {
            if(result < listArge[j]){
                result = listArge[j];
                break;
            }
        }
    }

    console.log("The largest number : " + result);
}
/* (3) */
const maxNumber3 = (a , b , c , ...d) => {
    let listArge = [a,b,c,...d];
    console.log("The largest number : " + Math.max(...listArge));
}

//Result
maxNumber1(1,2,5);
maxNumber2(1,2,5,4,6,3,7,8,9,6);
maxNumber3(11,2,5,4,6,3,7,8,9,1);

/* Practice (2) */
/* (1) */
const sum1 = (...d) => {
    let listArge = d;
    let listleng = listArge.length;
    let result = 0;

    for (let i = 0; i < listleng; i++) {
        result += d[i];
    }

    console.log("Sum of all numbers : " + result);
}
/* (2) */
const sum2 = (...arge) => {
    let result = arge.reduce((sum , currentValue) => sum += currentValue,0);
    console.log("Sum of all numbers : " + result);
}

//Result
sum1(1,2,5,4,6,3,7,8,9,6);
sum2(11,2,5,4,6,3,7,8,9,1);

/* Practice (3) */
const scoreList = [20,20,18,14,19,11,14,16,9,10];

/* (1) */
const ResultObject1 = scoreList.reduce((acc, value) => {
    if (value >= 18) {
        acc.Good_score.push(value);
    } else if (value >= 15) {
        acc.Normal_score.push(value);
    } else if (value >= 10) {
        acc.Bad_score.push(value);
    } else {
        acc.reject_score.push(value);
    }
    return acc;
}, {
    Good_score: [],
    Normal_score: [],
    Bad_score: [],
    reject_score: []
});


/* (2) */
const ResultObject2 = {
    Good_score : [],
    Normal_score : [],
    Bad_score : [],
    reject_score : [],
};

for (const value of scoreList) {
    switch (true) {
        case (value >= 18):
            ResultObject2.Good_score.push(value);
            break;
        case (value >= 15):
            ResultObject2.Normal_score.push(value);
            break;
        case (value >= 10):
            ResultObject2.Bad_score.push(value);
            break;
        default :
            ResultObject2.reject_score.push(value);
            break;
    }
}

//result
console.log(ResultObject1);
console.log(ResultObject2);

/* Practice (4) */
/* (1) */
const Bugatti = {
    Brand : "GX10",
    Model : "2020",
    Color : "Red",
    PrintCar : ({Brand = this.Brand, Model = this.Model, Color = this.Color}) => `Car information => Brand : ${Brand} , Model : ${Model} , Color : ${Color}.`
}

const {Brand , Model : Madel , Color , PrintCar} = Bugatti;
console.log(Brand , Madel , Color , PrintCar(Bugatti));
