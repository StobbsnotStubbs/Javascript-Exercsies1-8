function simple() {
  console.log("Hello World");
}

simple();

function quadrupler(numQuad) {
  console.log(numQuad * 4);
}
quadrupler(10);

//function welcome(firstName, lastName) {
//return `Hello ${firstName && lastName}, how can i help you?`;
//}

//welcome("kevin", "stobbs")

function welcome(fName, lName) {
  return "Hello " + fName + " " + lName + ", how can I help you?";
}

console.log(welcome("Kevin", "Stobbs"));

function welcome(fName, lName) {
  return (
    "Hello " +
    fName.toLowerCase() +
    " " +
    lName.toUpperCase() +
    ", how can I help you?"
  );
}

console.log(welcome("Kevin", "Stobbs"));

function temperatureConverter(Farenheit) {
  return (Celsius = Farenheit - (32 * 5) / 9);
}

console.log(temperatureConverter(72));

function toDogAge(fName, age) {
  let dogAge2 = 0;
  let dogAge3 = 0;
  if (age >= 1) {
    dogAge1 = 15;
  }
  if (age >= 2) {
    dogAge2 = 9;
  }
  if (age >= 3) {
    dogAge3 = (age - 2) * 5;
  }
  return `${fName}, your age in dog years is ${dogAge1 + dogAge2 + dogAge3}`;
}

console.log(toDogAge("Kevin", 3));

function calculator(arg1, arg2, arg3) {
  if (Number.isFinite(arg1));
  else {
    return console.error("You made a mistake in arg1");
  }
  if (isNaN(arg2));
  else {
    return console.error("You made a mistake in arg2");
  }
  if (Number.isFinite(arg3));
  else {
    return console.error("You made a mistake in arg3");
  }
  if (arg2 == "/") console.log(arg1 / arg3);
  if (arg2 == "*") console.log(arg1 * arg3);
  if (arg2 == "-") console.log(arg1 - arg3);
  if (arg2 == "+") console.log(arg1 + arg3);
}

calculator(3, "/", 3);

function min(a, b) {
  if (a >= b) {
    return console.log(b);
  }
  if (a <= b) {
    return console.log(a);
  }
}

min(1, 2);

function pow(x, n) {
  console.log(x ** n);
}

pow(5, 5);
