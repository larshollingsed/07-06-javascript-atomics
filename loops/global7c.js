var bottles = 99

while (bottles > 0) {
    console.log(bottles + " bottles of beer on the wall!\n" + bottles + " bottles of beer!\nYou take one down, pass it around,\n")
    --bottles
    if (bottles == 1) {
      console.log(bottles + " bottle of beer on the wall!\n" + bottles + " bottle of beer on the wall!\n" + bottles + " bottle of beer!\nYou take it down, pass it around,\nDamn, you were thirsty!")
      bottles--
    }
    if (bottles > 1) {
      console.log(bottles + " bottles of beer on the wall!")
    }
}