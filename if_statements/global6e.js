var age = parseInt(prompt("Please enter your age"));

if (age >= 25) {
  alert("You can rent a car")
} else if (age >= 21) {
  alert("Please don't drink and drive")
} else if (age >= 16) {
  alert("You're eligible for a driver's license")
} else if (age >= 0 && age < 16) {
  alert("You can't drive yet, but you'll be able to in a few years")
} else if (age < 0) {
  alert("You haven't been born yet")
} else if (isNaN(age) == true) {
  alert("Sorry, but that's not a number")
}