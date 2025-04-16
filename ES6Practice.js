"use strict"

const CreateItemList = (text) => {
    let LI = document.createElement("li")
    LI.textContent = text;
    return LI;
};


/* Practice (1) */
/* (1) */
const maxNumber1 = (a , b , c) => {
    let result = a >= b ? a >= c ? a : c : b >= c ? b : c
    let itemNumber;

    switch (result) {
        case a:
            itemNumber = 1;
            break;
        case b:
            itemNumber = 2;
            break;
        case c:
            itemNumber = 3;
            break;
    }
    return `The largest number : ${result} in item ${itemNumber}`;
}
/* (2) */
const maxNumber2 = (a , b , c , ...d) => {
    let listArge = [a,b,c,...d];
    let listleng = listArge.length;
    let result = {Value : 0 , CurrentIndex : null};

    for (let j = 0; j < listleng; j++) {
        if(result.Value < listArge[j]){
            result.Value = listArge[j];
            result.CurrentIndex = (j + 1);
        }
    }

    return `The largest number : ${result.Value} in item ${result.CurrentIndex}`;
}
/* (3) */
const maxNumber3 = (a , b , c , ...d) => {
    let listArge = [a,b,c,...d];
    const MaxNumber = Math.max(...listArge);
    const index = listArge.indexOf(MaxNumber) + 1;
    return `The largest number : ${MaxNumber} in item ${index}`;
}

//Result
//(1)
const M1P1Button = document.querySelector("#M1P1Button");
const M1P1ResultUL = document.querySelector("#M1P1ResultUL");

M1P1Button.addEventListener('click' , (e) => {
const M1P1Inputs = document.querySelectorAll(".M1P1Inputs");
e.preventDefault();
let M1P1List = [];
    for (const element of M1P1Inputs) {
        M1P1List.push(Number(element.value));
    }
M1P1ResultUL.innerHTML = "";
M1P1ResultUL.appendChild(CreateItemList(maxNumber1(...M1P1List)));

})

//(2)
const M2P1Button = document.querySelector("#M2P1Button");
const M2P1ResultUL = document.querySelector("#M2P1ResultUL");
document.querySelector("#M2P1Input").value = "11,2 ,5,  4,6, 3   ,7,8,9,1"

M2P1Button.addEventListener('click' , (e) => {
    e.preventDefault();

    const M2P1Input = document.querySelector("#M2P1Input");
    let M2P1List = String((M2P1Input.value)).split(",").map((currentValue) => Number(currentValue.trim()));
    M2P1ResultUL.innerHTML = "";
    M2P1ResultUL.appendChild(CreateItemList(maxNumber2(...M2P1List)));

})
//(3)
const M3P1Button = document.querySelector("#M3P1Button");
const M3P1ResultUL = document.querySelector("#M3P1ResultUL");
document.querySelector("#M3P1Input").value = "11,2 ,5,  4,6, 3   ,7,8,9,1"

M3P1Button.addEventListener('click' , (e) => {
    e.preventDefault();

    const M3P1Input = document.querySelector("#M3P1Input");
    let M3P1List = String((M3P1Input.value)).split(",").map((currentValue) => Number(currentValue.trim()));
    M3P1ResultUL.innerHTML = "";
    M3P1ResultUL.appendChild(CreateItemList(maxNumber3(...M3P1List)));

})

/* Practice (2) */
/* (1) */
const sum1 = (...d) => {
    let listArge = d;
    let listleng = listArge.length;
    let result = 0;

    for (let i = 0; i < listleng; i++) {
        result += d[i];
    }

    return `Sum of all numbers : ${result}`;
}
/* (2) */
const sum2 = (...args) => `Sum of all numbers : ${args.reduce((sum, val) => sum + val, 0)}`;

//Result
//(1)
const M1P2Button = document.querySelector("#M1P2Button");
const M1P2ResultUL = document.querySelector("#M1P2ResultUL");
document.querySelector("#M1P2Input").value = "11,2 ,5,  4,6, 3   ,7,8,9,1"

M1P2Button.addEventListener('click' , (e) => {
    e.preventDefault();

    const M1P2Input = document.querySelector("#M1P2Input");
    let M1P2List = String((M1P2Input.value)).split(",").map((currentValue) => Number(currentValue.trim()));
    M1P2ResultUL.innerHTML = "";
    M1P2ResultUL.appendChild(CreateItemList(sum1(...M1P2List)));

})
//(2)
const M2P2Button = document.querySelector("#M2P2Button");
const M2P2ResultUL = document.querySelector("#M2P2ResultUL");
document.querySelector("#M2P2Input").value = "11,2 ,5,  4,6, 3   ,7,8,9,1"

M2P2Button.addEventListener('click' , (e) => {
    e.preventDefault();

    const M2P2Input = document.querySelector("#M2P2Input");
    let M2P2List = String((M2P2Input.value)).split(",").map((currentValue) => Number(currentValue.trim()));
    M2P2ResultUL.innerHTML = "";
    M2P2ResultUL.appendChild(CreateItemList(sum2(...M2P2List)));

})

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
