var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

// first 4 = 62MW
// next 15 = 124MW

// two loops


while (currentGen <= 4) {
    totalMW += 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  	currentGen ++;
}

for (var genNumber = currentGen; genNumber < totalGen + 1; genNumber++) {
    totalMW += 124;
    console.log("Generator #" + genNumber + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
  }