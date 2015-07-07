
for (x = 99; x > 0; x--) {
  if (x < 99 && x != 1) {
    console.log(x + " bottles of beer on the wall!\n")
  }
  if (x == 1) {
    console.log(x + " bottle of beer on the wall!\n" + x + " bottle of beer on the wall,\n" + x + " bottle of beer!\nYou take one down, pass it around\nYou are probably thirsty.")
  } 
  
  else if (x > 1) {
      console.log (x + " bottles of beer on the wall,\n" + x + " bottles of beer!\nYou take one down, pass it around,\n")
  }
}