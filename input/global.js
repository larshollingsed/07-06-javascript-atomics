var name = prompt("What is your name?", "enter your name here");
var age = prompt("What is your age?", "enter your age here");
var hometown = prompt("What is your hometown?", "enter your hometown here");
var favorite_number = prompt("What is your favorite number?", "enter your favorite number here");



alert("Hello " + name + "!");
console.log("I like the name " + name + ".  It was my great-grandma's name!");
alert("I see that you are " + age + " years old.");
console.log("My cat also lived to be " + age + " years old.  Crazy, eh?");
alert("You're from " + hometown + "?");
console.log("Weird, my great-grandma used to go cat-shopping in " + hometown + ".  Small world.");
alert(favorite_number + " is an interesting favorite number.");
console.log("My great-grandma had " + favorite_number + " cats when I was born.");

console.log(typeof age)