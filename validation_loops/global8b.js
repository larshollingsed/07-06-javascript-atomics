var number = 73
var input = prompt("Guess the number between 1 and 100");

while (input != number) {
  if (input > number) {
    var input = prompt("The number is less than " + input)
  } else if (input < number) {
    var input = prompt("The number is greater than " + input)
  }
}
alert("You got it! The number was " + number)