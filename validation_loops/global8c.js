var numbers = []
var input = parseInt(prompt("Give me a number between 1 and 8(inclusive)"))
while (input >= 1 && input <= 8) {
  numbers.push(input)
  input = parseInt(prompt("Give me a number between 1 and 8(inclusive)"))
}
var sum = 0
for (var x = 0; x < numbers.length; x++) {
  sum += parseInt(numbers[x])
}

alert("The average of " + numbers + " is " + sum/numbers.length)