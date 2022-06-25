let num1 = +prompt('Enter first number:');
let operator = prompt('Enter operator (type +, -, / or *):');
let num2 = +prompt('Enter second number:');

let result;

if (isNaN(num1) || isNaN(num2)) {
    alert('Error! Refresh the page and input numbers in the required boxes!');
} else if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '/') {
    result = num1 / num2;
} else if (operator === '*') {
    result = num1 * num2;
} else {
    alert('Error! Recheck the operator used');
}

let message = num1 + ' ' + operator + ' ' + num2 + ' = ' + result;

alert(message);