// user input
const firstNum = +prompt("please enter the first number:");

const secondNum = +prompt("please enter the second number:");

const operation = prompt(
  `Please pick which operation you want to do:
add
subtract
multiply
divide`
);

// add
const add = (num1, num2) =>
  console.log(num1 + " + " + num2 + " = " + `${num1 + num2}`);

// subtract
const subtract = (num1, num2) =>
  console.log(num1 + " - " + num2 + " = " + `${num1 - num2}`);

// multiply
const multiply = (num1, num2) =>
  console.log(num1 + " x " + num2 + " = " + `${num1 * num2}`);

// divide
const divide = (num1, num2) =>
  console.log(num1 + " / " + num2 + " = " + `${num1 / num2}`);

if (operation === "add") {
  add(firstNum, secondNum);
} else if (operation === "subtract") {
  subtract(firstNum, secondNum);
} else if (operation === "multiply") {
  multiply(firstNum, secondNum);
} else if (operation === "divide") {
  divide(firstNum, secondNum);
} else console.log("you entered something wrong...");
