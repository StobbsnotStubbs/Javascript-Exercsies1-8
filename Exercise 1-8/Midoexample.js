/////////////////     Function     ////////////////////

const firstName = "Lucy";

// Declare - This does nothing
function myFunction() {
  console.log("Hello World");
}

// Invoke - This uses the function
myFunction();

// Example of function with arguments
function consoleDouble(num) {
  console.log(num * 2);
}

consoleDouble(2);

// Return Keyword
// The return statement stops the execution of a function and returns a value.
// Note any code after the return keyword is not executed

function double(num) {
  return num * 2;
  console.log("Nothing happens");
}
console.log(double(75));

// Two or more paremeters

function multiplier(num1, num2, num3) {
  return num1 * num2 * num3;
}

console.log(multiplier(1, 2, 3));

// Variable as an argument

function welcome(fName) {
  return `Hi ${fName}, how can I help you?`;
}

console.log(welcome(firstName));

// Self Invoking anonymous Functions

(function () {
  console.log("Hello");
})();

function multiplier(num1, num2, num3) {
  return num1 * num2 * num3;
}

console.log(multiplier(1, 2, 3));

// Function Expressions
const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
