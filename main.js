const numbersBtn = document.getElementsByClassName("numbersBtn");
const operatorsBtn = document.getElementsByClassName("operatorsBtn");

const sumBtn = document.getElementById("sumBtn");
const clearDisplay = document.getElementById("clearDisplay");
const deleteNumber = document.getElementById("deleteNumber");

let numbersDisplay = document.getElementById("numbersDisplay");
let sumDisplay = document.getElementById("sumDisplay");

let firstNumber = 0;
let secondNumber = 0;
let totalSum = 0
let operatorSelected;


for (let number of numbersBtn) {
    number.onclick = () => {
        numbersDisplay.value += number.value
    };
};


for (let operator of operatorsBtn) {
    operator.onclick = () => {
        totalSum != 0 ? firstNumber = totalSum : firstNumber = numbersDisplay.value;
        operatorSelected = operator.value;
        numbersDisplay.value = "";
    };
}


sumBtn.onclick = () => {
    secondNumber = numbersDisplay.value;
    switch (operatorSelected) {
        case "+":
            totalSum = Number(firstNumber) + Number(secondNumber);
            break;
        case "-":
            totalSum = Number(firstNumber) - Number(secondNumber);
            break;
        case "*":
            totalSum = Number(firstNumber) * Number(secondNumber);
            break;
        case "/":
            totalSum = Number(firstNumber) / Number(secondNumber);
            break;
        default:
            console.log("Please enter numbers");
            break;
    }
    sumDisplay.value = totalSum;
    numbersDisplay.value = "";
}


function clearAll(){
    numbersDisplay.value = "";
    sumDisplay.value = "";
    firstNumber=0;
    secondNumber=0;
    totalSum=0;
}

clearDisplay.onclick = () => {
    clearAll();
}

deleteNumber.onclick = () => {
    numbersDisplay.value = numbersDisplay.value.substring(0,numbersDisplay.value.length-1)
}