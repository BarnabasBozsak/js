import input from "./input.js";
let firstNumber = +(await input("Please enter the first number: "));
let secondNumber = +(await input("Please enter the second number: "));
console.log(`Sum: ${firstNumber + secondNumber}`);
console.log(`Subtracted: ${firstNumber - secondNumber}`);
console.log(`Multiplied: ${firstNumber * secondNumber}`);
console.log(`Divided: ${(firstNumber / secondNumber).toFixed(2)}`);
console.log(`Integer: ${Math.floor(firstNumber / secondNumber)}`);
console.log(`Remainder: ${firstNumber % secondNumber}`);
