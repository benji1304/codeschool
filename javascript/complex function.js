function changePowerTotal(totalPower, genNum, genStatus, currentPower) {
    // If the current generator is set to "on", then add to the total power generated.
    // Or if the current generator is set to "off", then remove from the total power generated.
    // return the total power generated.
    // alert the technician in the following formats:   

    // For switching on:

    // Generator #2 is now on, adding 62 MW, for a total of 62 MW!
    // For switching off:

    // Generator #2 is now off, removing 62 MW, for a total of 0 MW!


    if (genStatus === "on") {
        totalPower += currentPower;
        alert("Generator #" + genNum + " is now " + genStatus + ", adding " + currentPower + " MW, for a total of " + totalPower + " MW!");


    } else if (genStatus === "off") {
        totalPower -= currentPower;
        alert("Generator #" + genNum + " is now " + genStatus + ", removing " + currentPower + " MW, for a total of " + totalPower + " MW!");


    }
    return totalPower; 

}

alert(eightiesMovies[1][0] + " " + eightiesMovies[1][1] + " " + eightiesMovies[1][2] + " " + eightiesMovies[1][3] + " " + eightiesMovies[1][4]);
