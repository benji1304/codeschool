var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(numSheep >= 10000) {
      var halfSheep = numSheep / 2;    
    console.log("Removing "+ halfSheep + " sheep from the population.")
    numSheep /= 2;
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
