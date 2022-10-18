
const form = document.querySelector('#guessNumberForm');
const getNumber = document.querySelector('#getNumber');
const outputText = document.querySelector('#outputText');
const guessedNumber = document.querySelector('#guessedNumber');
const numOfGuess = document.querySelector('#numOfGuess');

const randomNumber = Math.floor(Math.random() * 100 + 1);
const userGuess = [];
let numberOfGuess = 0;

const checkNumber = () => {

    if (getNumber.value === '') {
        console.log("Number field can not be empty");
        outputText.textContent = "Number field can not be empty.";
        outputText.style.color = 'red';
        return false;
    }
    else if (getNumber.value < 1 || getNumber.value > 100) {
        outputText.style.color = 'red';
        console.log("Number shoud be between 1 and 100");
        outputText.textContent = "Number shoud be between 1 and 100";
        outputText.style.color = 'red';
        return false;
    }
    else {
        userGuess.push(getNumber.value);
        numberOfGuess += 1;
        
        if (getNumber.value > randomNumber){
            console.log("Your number is higher :(");
            outputText.textContent = "Your number is higher. Try again :(";
            setError();
        }
        else if (getNumber.value < randomNumber){
            console.log("Your number is lower :(");
            outputText.textContent = "Your number is lower. Try again :(";
            setError();
        }
        else {
            console.log("You have guessed it right. :)");
            outputText.textContent = "You have guessed it right. :)";
            setSuccess();
        }
    }
}

function setError () {
    outputText.style.color = 'red';
    guessedNumber.textContent = "Guessed Numbers: " + userGuess;
    numOfGuess.textContent = "Number of Guesses: " + numberOfGuess;
    return false;
}
const setSuccess = () => {
    outputText.style.color = 'green';
    guessedNumber.textContent = "Guessed Numbers: " + userGuess;
    numOfGuess.textContent = "Number of Guesses: " + numberOfGuess;
    return true;
}


const playAgain = () => {
    location.reload();
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkNumber();
});

// form.addEventListener();
























// function greet(names){
//     console.log( "Hello, " + names +  " World!");
// }
// greet("shahriar");


//  function randomNumber () {

//    let x =  Math.floor((Math.random() * 50) + 1)
//    return x;
// }
// let y = randomNumber();

// let message = "";

// let y =  Math.floor((Math.random() * 50) + 1)
// function compare() {
//     //let userInput = parseInt(prompt("Enter your numbre: "));
//     let userInput = document.getElementById("myNumber").value;

//     for(i = 0; i < 5; i++)
//     {
//         if (userInput === y){
//             //console.log("You guess it right.");
//             document.getElementById("demo").innerHTML = "Your guess is right."
//             break;
//         }
//         else if(userInput < y){
//             //console.log("Your number is lower, guess again.");
//             //userInput = parseInt(prompt("Enter your number: "));
//             userInput = document.getElementById("myNumber").value;
//             document.getElementById("demo").innerHTML = "Your number is lower, guess again."
//         }
//         else if(userInput > y){
//             //console.log("Your number is higher, guess agin.");
//             //userInput = parseInt(prompt("Enter your number: "));
//             userInput = document.getElementById("myNumber").value;
//             document.getElementById("demo").innerHTML = "Your number is higher, guess again."
            
//         }
//             else {
//                 //console.log("Try agin Letar.");
//                 document.getElementById("demo").innerHTML = "Try agin letar";
//             }
//             //console.log("Try agin Letar.");   
//     }
// }   
    
    // function guessNumber() {
    // y;
    // //let y = randomNumber();
    // compare();
// }