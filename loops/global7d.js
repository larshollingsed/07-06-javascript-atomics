var start = parseInt(prompt("Enter a number to start counting at"));
var end = parseInt(prompt("Enter a number to end counting at"));
if (start == end) {
    alert("Is counting from one number to itself like dividing by zero?")
} else {
    var increment = parseInt(prompt("Enter a number to increment the count by"));
}

if (start > end) {
    var response = prompt("Your ending value is higher than your start value\nWould you like to count down from the end value instead?", "yes or no")
}   else if (end > start) {
      console.log("Starting at " + start + " and counting up to " + end + " by " + increment + "s.")
      while (start < end) {
        if (start % 3 == 0 && start % 5 == 0) {
            console.log ("FizzBuzz")
        } else if (start % 3 == 0) {
            console.log ("Fizz")
        } else if (start % 5 == 0) {
            console.log ("Buzz")
        } else {
            console.log(start)
        }
        start += increment
      }
}
 
if (response == "yes") {
    console.log("Starting at " + start + " and counting down to " + end + " by " + increment + "s.")
    while (start > end) {
      if (start % 3 == 0 && start % 5 == 0) {
        console.log ("FizzBuzz")
      } else if (start % 3 == 0) {
          console.log ("Fizz")
      } else if (start % 5 == 0) {
          console.log ("Buzz")
      } else {
          console.log(start)
      }
      start -= increment
  }
} else if (response == "no") {
    alert("Alriiighty then.  I don't know how to count backwards anyway")
}
