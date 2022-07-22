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
  console.log(x);
  console.log(y);
  console.log(x / y);
  return x / y;
}

function percentage(x) {
  return x / 100;
}

function operate(op, x, y) {
  if (op === "+") {
    return add(x, y);
  } else if (op === "-") {
    return subtract(x, y);
  } else if (op === "x") {
    return multiply(x, y);
  } else if (op === "/") {
    return divide(x, y);
  } else if (op === "%") {
    return percentage(x);
  }
}

//add event listener to all buttons
//return number or operator store in a variable
//append number into text content of display

const operators = ["+", "-", "x", "/", "%"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let runningDisplay = document.querySelector(".runningDisplay");
let summingDisplay = document.querySelector(".summingDisplay");
let tempVariableX = "";
let tempVariableY = "";
let tempOp = "";

function lastChar(string) {
  return string.substring(string.length - 1);
}

function secLastChar(string) {
  return string.substring(
    runningDisplay.textContent.length - 2,
    runningDisplay.textContent.length - 1
  );
}

//Handling Number
const numButtons = document.querySelectorAll(".num");
numButtons.forEach((numButton) =>
  numButton.addEventListener("click", displayNum)
);

function displayNum(e) {
  let text = e.target.innerText;
  runningDisplay.textContent += text;
}

//Handling Operators
const opButtons = document.querySelectorAll(".operation");
opButtons.forEach((opButton) => opButton.addEventListener("click", displayOp));

function displayOp(e) {
  let text = e.target.innerText;
  if (tempVariableX === "") {
    tempVariableX = runningDisplay.textContent;
  } else {
    tempVariableY = runningDisplay.textContent;
  } //last numbers are y
  run(runningDisplay.textContent); //evaluate
  summingDisplay.textContent = tempVariableX + text; //move y up add op
  runningDisplay.textContent = ""; //clear bottom
  tempOp = text;
  console.log(tempVariableX);
  console.log(tempVariableY);
  console.log(tempOp);
}

//When to calculate
//- when equal button is clicked
//- when there is varX, operator, varY, and an operator is called
//After calculating, the result goes into tempVariable X
function run(str) {
  if (tempVariableY != "") {
    let result = operate(
      tempOp,
      parseFloat(tempVariableX),
      parseFloat(tempVariableY)
    );
    summingDisplay.textContent = result;
    tempVariableX = result;
    console.log(result);
  }
}

//Handling clear and back
const clButton = document.querySelector("#cl");
clButton.addEventListener("click", clearAll);
const backButton = document.querySelector("#back");
backButton.addEventListener("click", backspace);

function clearAll() {
  runningDisplay.textContent = "";
  summingDisplay.textContent = "";
  tempVariableX = "";
  tempVariableY = "";
  tempOp = "";
}

function backspace() {
  runningDisplay.textContent = runningDisplay.textContent.substring(
    0,
    runningDisplay.textContent.length - 1
  );
}
