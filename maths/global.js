// takes the input from the user and parses it into a string to store
var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter a number"));
var number3 = parseInt(prompt("Enter a number"));

var sum = number1 + number2 + number3
alert(number1 + " + " + number2 + " + " + number3 + " = " + sum);
var difference = number1 - number2 - number3
alert(number1 + " - " + number2 + " - " + number3 + " = " + difference);
var product = number1 * number2 * number3
alert(number1 + " x " + number2 + " x " + number3 + " = " + product);
var quotient = number1 / number2
alert(number1 + " / " + number2 + " = " + quotient);
alert(number1 + "++ = " + ++number1);
alert(number2 + "-- = " + --number2);


console.log(Math.pow(5,3));
console.log(Math.max(6, 20, 99485, -25, 0.452));
console.log(Math.min(6, 20, 99485, -25, 0.452));
console.log(Math.abs(-872));
console.log(Math.ceil(Math.random() * 10));