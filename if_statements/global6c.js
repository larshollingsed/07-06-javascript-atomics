var secret_number = 26;

var user_input = parseInt(prompt("Enter the secret number"));

if (secret_number === user_input) {
  alert("You guessed the secret number!")
}
if (secret_number !== user_input) {
  alert ("Don't quit your day job")
}