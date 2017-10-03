var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

// first 4 = 62MW
// next 15 = 124MW

// two loops


for (currentGen < 4 ; currentGen++;) {
    totalMW += 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + "MW!");
  }
  
  for (currentGen < totalGen + 1; currentGen++;) {
    totalMW += 124;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + "MW!");
  }