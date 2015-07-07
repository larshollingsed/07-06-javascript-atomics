var password = "sushi"
var input
x = 0
while (password != input) {
  var input = prompt("Enter the password")
  x++
}

alert("It took you " + x + " tries to get the password correct");
// using a "for" loop
// var input
// for (password = "sushi"; password != input; input) {
//   var input = prompt("Enter the password")
// }