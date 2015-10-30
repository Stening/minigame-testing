
function shuffleArray(inputArray){
    var i = inputArray.length;
    var j;
    var temp;
    while(--i > 0){                             //this while loop counts down the value of the length of the array
        j = Math.floor(Math.random() * (i+1));  //generates a random number based on the length of the array
        temp = inputArray[j];                   //a temp value is made from the random position in the array
        inputArray[j] = inputArray[i];          //the random position takes on the value of where the down counter is
        inputArray[i] = temp;                   //the place where the counter is takes on the temp value we saved from the random position
    }
}
