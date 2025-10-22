const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const myltiplicationBtn = document.getElementById('multiplication');
const divisionBtn = document.getElementById('division');
const subminBtn = document.getElementById('submit');
const resultDisplay = document.getElementById('result');

let action = '+';
let action2 = '*';

plusBtn.onclick = function() {
    action = '+'
}

minusBtn.onclick = function() {
    action = '-'
}

myltiplicationBtn.onclick = function() {
    action2 = '*'
}

divisionBtn.onclick = function() {
    action2 = '/'
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
    return actionSymbol === '+' ? num1 + num2 : num1 - num2 ;
}

function computeNumberWithAction2(inp1, inp2,actionSymbol2) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);
    return actionSymbol2 === '*' ? num1 * num2 : num1 / num2 ;
}

subminBtn.onclick = function() {
    const result = computeNumberWithAction(input1, input2, action) ;
    printResult(result);
}
