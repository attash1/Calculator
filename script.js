const expressionObj = document.querySelector('.expression');
const displayObj = document.querySelector('.display');
const numButtons = document.querySelectorAll('.numButton');
const operationButtons = document.querySelectorAll('.op');
const buttons = document.querySelectorAll('.button');
const equalButton = document.querySelector('.equalButton');
const negativeButton = document.querySelector('.negative');
const decimalButton = document.querySelector('.decimalButton');

let inputNumber1 = 0;
let operation = "";
let inputNumber2 = 0;

numButtons.forEach(button => button.addEventListener('click', numInputHandler));
operationButtons.forEach(button => button.addEventListener('click', opInputHandler));
equalButton.addEventListener('click', equalHandler);
negativeButton.addEventListener('click', negativeToggle);
decimalButton.addEventListener('click', addDecimal);

function operate(num1, opSymbol, num2) {
    let result = 0;
    if (opSymbol == '+')
        result = num1 + num2;
    else if (opSymbol == '-')
        result = num1 - num2;
    else if (opSymbol == '*')
        result = num1 * num2;
    else if (opSymbol == '÷')
        result = num1 / num2;
    else if (opSymbol == '^')
        result = Math.pow(num1, num2);
    else { 
        return "Unrecognized operation symbol";
    }

    return Math.round(result * 100) / 100;
}




function numInputHandler(e) {     
    displayObj.textContent = displayObj.textContent.concat(e.target.textContent);
}

function opInputHandler(e) {
    if (operation == "") {                          //if expression is incomplete
        inputNumber1 = Number(displayObj.textContent);
        operation = e.target.textContent;
    }
    else {                                          //if expression is long, evaluate first two numbers first
        inputNumber2 = Number(displayObj.textContent);
        inputNumber1 = operate(inputNumber1, operation, inputNumber2);
        inputNumber2 = 0;
        operation = e.target.textContent;

    }
    expressionObj.textContent = `${inputNumber1} ${operation}`;
    displayObj.textContent = "";
}
function equalHandler(e) {

    if (operation != "") {
        inputNumber2 = Number(displayObj.textContent);
        let result = operate(inputNumber1, operation, inputNumber2)

        expressionObj.textContent = `${inputNumber1} ${operation} ${inputNumber2}`;
        displayObj.textContent = result;

        inputNumber1 = result;
        inputNumber2 = 0;
        operation = "";
    }
}

function negativeToggle() {
    let curNumOnScreen = Number(displayObj.textContent);
    curNumOnScreen *= -1;
    displayObj.textContent = curNumOnScreen;
}

function addDecimal() {
    if (!displayObj.textContent.includes(".")) {
        displayObj.textContent = displayObj.textContent.concat(".");
    }
}


const clearButtonObj = document.querySelector('.clear');
clearButtonObj.addEventListener('click', clearDisplay);

function clearDisplay() {
    displayObj.textContent = "";
    expressionObj.textContent = "";
    inputNumber1 = 0;
    operation = "";
    inputNumber2 = 0;
}

const deleteButtonObj = document.querySelector('.delete');
deleteButtonObj.addEventListener('click', () =>
displayObj.textContent = displayObj.textContent.slice(0, displayObj.textContent.length-1)
);





//next two functions handle changing color of buttons on mouseover/out

buttons.forEach(button => button.addEventListener('mouseover', (e) => 
    e.target.style.cssText = 'background-color:rgb(179, 178, 177);'
));

buttons.forEach(button => button.addEventListener('mouseout', (e) => 
    e.target.style.cssText = 'background-color:white;'
));




