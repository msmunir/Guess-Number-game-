
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

