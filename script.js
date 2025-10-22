const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const myltiplicationBtn = document.getElementById('multiplication');
const divisionBtn = document.getElementById('division');
const subminBtn = document.getElementById('submit');
const resultDisplay = document.getElementById('result');

let action ;

plusBtn.onclick = function() {
    action = '+'
}

minusBtn.onclick = function() {
    action = '-'
}

myltiplicationBtn.onclick = function() {
    action = '*'
}

divisionBtn.onclick = function() {
    action = '/'
}




function printResult(result) {
    if(result < 0) {
        resultDisplay.style.color = 'red'
    } else {
        resultDisplay.style.color = 'green'
    }
    resultDisplay.textContent = result;
}

function computeNumberWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);
    switch(actionSymbol) {
        case '+':
            return num1 + num2;
        case '-': 
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}



subminBtn.onclick = function() {
    const result = computeNumberWithAction(input1, input2, action) ;
    printResult(result);
}
