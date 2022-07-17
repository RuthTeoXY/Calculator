function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(op, x, y) {
  return op(x, y);
}

//add event listener to all buttons
//return number or operator store in a variable
//append number into text content of display

const operators = ["+", "-", "x", "/", "%"];
let runningDisplay = document.querySelector(".runningDisplay");
let summingDisplay = document.querySelector(".summingDisplay");
let tempHandler = [];

//Handling Number
const numButtons = document.querySelectorAll(".num");
numButtons.forEach((numButton) => numButton.addEventListener("click", display));

function display(e) {
  let text = e.target.innerText;
  runningDisplay.textContent += text;
  tempHandler.push(text);
}

//Handling Operators
const opButtons = document.querySelectorAll(".operation");
opButtons.forEach((opButton) =>
  opButton.addEventListener("click", displayAndOp)
);

function displayAndOp(e) {
  let text = e.target.innerText;
  runningDisplay.textContent += text;
  tempHandler.push(text);
}

//When to calculate
//- when equal button is clicked
//- when there is varX, operator, varY, and an operator is called
