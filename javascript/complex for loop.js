var totalGen = 19;
var totalMW = 0;

//for loop
//even numbered turbines
// gens 1 - 4 = 62MW
// gen 5 - 19 = 124 MW
// Generator #1 is off
// Generator #2 is on, adding 62 MW, for a total of 62 MW!

//The Generator provides 62 MW of power.
//The Generator provides 124 MW of power.
// The Generator is off.


for (var genNum = 1; genNum < totalGen + 1; genNum++) {
    if (genNum % 2 === 0 ) { // is it even? 
        if (genNum > 1 && genNum <= 4){
            // gens 1 - 4 = 62MW
            // add 62MW
            totalMW += 62;
            console.log("Generator #" + genNum + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
            
        } else if (genNum > 4 && genNum < totalGen + 1) {
            // gen 5 - 19 = 124 MW
            //Generator #2 is on, adding 124 MW, for a total of 62 MW!
            // add 124MW
            totalMW += 124;
            console.log("Generator #" + genNum + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
            
        }
    }
    else {
        console.log("Generator #" + genNum + " is off.")
        }
  } 