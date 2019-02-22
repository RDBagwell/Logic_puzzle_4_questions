
var root = document.getElementById('root');
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

// Function for question 2
function hunderdLightbulb(num,nth){
    let nthArry = new Array();
    for(i = 0; i < num+1; i=i+nth){
        nthArry.push(i);
    }
    nthArry.shift();
    return nthArry.length;
}

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

/**** Desplay Functons Output ****/
root.innerHTML= "Sword Circle = "+SwordCircle(100)
+"<br>100 Switches with 100 Bulbs = "+hunderdLightbulb(100,10)
+"<br>Prime number problem = "+primeNumberProblem(68)
+"<br>100 doors to be painted = "+hunderdDoors(100);

/***************************************************** Start Rock Paper Scissors Code *****************************************************/
let playerScore = 0;
let compScore = 0;
let draw = 0;
let noDraw = true;
function paperRockScissors(player){
    let comp = Math.floor(Math.random()*3)
    let chose = ['paper', 'rock','scissors'];
    let playerChose = chose[player];
    let compChose = chose[comp];
    let outCome = `player chose ${playerChose} comp chose ${compChose}`;
    switch (compChose) {
        case 'paper':
            if(playerChose === 'rock'){
                scoreBoard('comp');
                return outCome+` COMP WINS!!! the Score is Player: ${playerScore} COMP: ${compScore} Drwas: ${draw}`;
            } else if(playerChose === 'scissors'){
                scoreBoard('player');
                return outCome+` Player WINS!!! the Score is Player: ${playerScore} COMP: ${compScore} Drwas: ${draw}`;
            } else {
                scoreBoard('draw');
                return outCome+` Draw!!! the Score is Player: ${playerScore} COMP: ${compScore} Drwas: ${draw}`;
            }
        case 'rock':
            if(playerChose === 'scissors'){
                scoreBoard('comp');
                return outCome+` COMP WINS!!! the Score is Player: ${playerScore} COMP: ${compScore} Drwas: ${draw}`;
            } else if(playerChose === 'paper'){
                scoreBoard('player');
                return outCome+` Player WINS!!! the Score is Player: ${playerScore} COMP: ${compScore} Drwas: ${draw}`;
            } else {
                scoreBoard('draw');
                return outCome+` Draw!!! the Score is Player: ${playerScore} COMP: ${compScore} Drwas: ${draw}`;
            } 
        case 'scissors':
            if(playerChose === 'paper'){
                scoreBoard('comp');
                return outCome+` COMP WINS!!! the Score is Player: ${playerScore} COMP: ${compScore} Drwas: ${draw}`;
            } else if(playerChose === 'rock'){
                scoreBoard('player');
                return outCome+` Player WINS!!! the Score is Player: ${playerScore} COMP: ${compScore} Drwas: ${draw}`;
            } else {
                scoreBoard('draw');
                return outCome+` Draw!!! the Score is Player: ${playerScore} COMP: ${compScore} Drwas: ${draw}`;
            }                    
        default:
            break;
    }
}

function scoreBoard(winner) {
    if(winner =='comp'){
       return compScore = compScore+1;
    } else if(winner =='player'){
        playerScore = playerScore+1;
    } else { 
        draw = draw+1;
    }
}

function bestOF(rounds){
    let finalScore = {player: 0, comp: 0}
    if(rounds%2===0){
        console.log(`Rounds Must Be Odd!!`);
        return false;
    }
    let toWin = Math.ceil(rounds/2);
    let roundsWon = 0;
    while (noDraw) {
        if(playerScore === toWin || compScore === toWin){
            finalScore = {player: playerScore, comp: compScore}
            noDraw = false;
        } else {
            console.log(paperRockScissors(Math.floor(Math.random()*3)));
            roundsWon++;
        }
    }
    if(finalScore.player > finalScore.comp){
        console.log(`PLAYER WINS IN ${roundsWon} Rounds!!!`);
    } else {
        console.log(`COMP WINS IN ${roundsWon} Rounds!!!`); 
    }
    
}

bestOF(3);

/***************************************************** End Rock Paper Scissors Code *****************************************************/
/***************************************************** Start Magic 8 Ball *****************************************************/
function eightBall(){
    let answerNum = Math.floor(Math.random()*20);
    let answres = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    return answres[answerNum];
}
// root.innerHTML = "<br>"+eightBall();
/***************************************************** End Magic 8 Ball *****************************************************/