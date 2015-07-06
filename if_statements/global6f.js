var side1 = parseInt(prompt("Enter the length of side 1"));
var side2 = parseInt(prompt("Enter the length of side 2"));
var side3 = parseInt(prompt("Enter the length of side 3"));

if (isNaN(side1) == true || isNaN(side2) == true || isNaN(side3) == true) {
  alert("At least one of your entries was not a valid number")
} else if (side1 == 0 || side2 == 0 || side3 == 0){
  alert("Are you sure you meant to enter 0?")
} else if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  alert("This is a valid triangle")
} else {
  alert("This is not a valid triangle")
}
