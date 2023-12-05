const operatorpluse = prompt("Enter operator [ either +, -, * or / ]: ");
const number1 = parseFloat(prompt("Enter first number:"));
const number2 = parseFloat(prompt("Enter second number:"));

let result;


if (operatorpluse == '+') {
    result = number1 + number2
}

else if (operatorpluse == '-') {
    result = number1 - number2
}

else if (operatorpluse == '*') {
    result = number1 * number2
}

else if (operatorpluse == '/') {
    result = number1 / number2
}

const alerttext = ('Your Result: ')
const madeby = ('ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ Made by: nikanatenaze')

alert(alerttext + result + madeby)