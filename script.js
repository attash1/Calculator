const expressionObj = document.querySelector('.expression');
const displayObj = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');


let number1 = '';
let operation = '';
let number2 = '';



function operate(stringNum1, opSymbol, stringNum2) {
    let num1 = Number(stringNum1);
    let num2 = Number(stringNum2);
    if (opSymbol == '+')
        return num1 + num2;
    else if (opSymbol == '-')
        return num1 - num2;
    else if (opSymbol == '*')
        return num1 * num2;
    else if (opSymbol == '/')
        return num1 / num2;
    else if (opSymbol == '^')
        return Math.pow(num1, num2);
    else 
        return "Unrecognized operation symbol";
}

function negative() {

}

function inputHandling(e) {     //Probably don't use inputHandling
/*
    else if (e.target.textContent == '+/-') {
        //FILL IN
    }
    else if (e.target.textContent == '.'){
        //DECIMAL STUFF
    }

    else if (!isNaN(Number(e.target.textContent))) { //if pressed key is a number
        displayObj.textContent = e.target.textContent;
    }
    */
    
}

function updateExpression(newExpr) {
    expressionObj.textContent = newExpr;
}
function updateDisplay(newDisplay) {
    displayObj.textContent = newDisplay;
}




const clearButtonObj = document.querySelector('.clear');
clearButtonObj.addEventListener('click', clearDisplay);

function clearDisplay() {
    displayObj.textContent = "";
    expressionObj.textContent = "";
    number1 = "";
    operation = "";
}

const deleteButtonObj = document.querySelector('.delete');
deleteButtonObj.addEventListener('click', () =>
displayObj.textContent = displayObj.textContent.slice(0, displayObj.textContent.length-1)
);


buttons.forEach(button => button.addEventListener('click', inputHandling));


//next two functions handle changing color of buttons on mouseover/out

buttons.forEach(button => button.addEventListener('mouseover', (e) => 
    e.target.style.cssText = 'background-color:rgb(179, 178, 177);'
));

buttons.forEach(button => button.addEventListener('mouseout', (e) => 
    e.target.style.cssText = 'background-color:white;'
));




