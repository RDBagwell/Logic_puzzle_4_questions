
// Function for question 1
function SwordCircle(num){
    let count = (num+1);
    let swords = new Array();
    for(i = 1; i < count; i++){
        swords.push(i);
    }
    while (swords.length > 1) {
        swords.push(swords[0]);
        swords.shift();
        swords.shift();
    } 
    return swords[0];
}
console.log ("Sword Circle = "+SwordCircle(100));

// Function for question 2
function hunderdLightbulb(num,nth){
    let nthArry = new Array();
    for(i = 0; i < num+1; i=i+nth){
        nthArry.push(i);
    }
    nthArry.shift();
    return nthArry.length;
}
console.log("100 Switches with 100 Bulbs = "+hunderdLightbulb(100,10));

// Function for question 3
function primeNumberProblem(num){
    let floors = new Array();
    let primeFloors = new Array();
    let nonPrimeFloors = new Array();
    let legal = new Array();
    for(i = 1; i < num+1; i++){
        floors.push(i);
    }
    floors.forEach((floor)=>{
        if(isPrime(floor) === true){
            primeFloors.push(floor);
        } else (nonPrimeFloors.push(floor))
    });
    nonPrimeFloors.forEach((e)=>{
        if(!hasPrime(e, primeFloors) && e != 1){
            legal.push(e);
        }
    });
    return legal.length;
}
console.log("Prime number problem = "+primeNumberProblem(68));

// Function for question 4
function hunderdDoors(num){
    let doors = new Array();
    let doorsReverse = new Array();
    for(i = 0; i < num; i=i+2){
        doors.push(i);
    }
    for(j = num; j > 0; j=j-3){
        doorsReverse.push(j);
    }
    for(k = 0; k < num; k++){
        if(doors[k] === doorsReverse[k]){
            return doors[k];
        } 
    }
}
console.log("100 doors to be painted = "+hunderdDoors(100));

/**** Used for question 3 ****/
function isPrime(input) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) {
            prime = false;
            break;
        }
    }
    return prime && (input > 1);
}
/**** Used for question 3 ****/
function hasPrime(num, arr){
    let len = arr.length;
    let regex;
    let str = num;
    for(i=0; i<len; i++){
        regex = RegExp(arr[i]);
        if(regex.test(str)){
            return regex;
        }
    }
}