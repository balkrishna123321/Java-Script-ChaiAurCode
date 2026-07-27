let randomNumber = (parseInt(Math.random()*100+1)) //random number is between 1 and 100.

//Selecting HTML Elements
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField') //Selects the input box where the user types a number.
const guessSlot = document.querySelector('.guesses')    //Selects the area where previous guesses will be shown.
const remaining = document.querySelector('.lastResult') //Shows remaining guesses.
const lowOrHi = document.querySelector('.lowOrHi')      //Displays messages likeToo High, Too Low, Correct
const startOver = document.querySelector('.resultParas')//This is the container where Start New Game will be added.

//Create a Paragraph: It is only created in memory.
const p = document.createElement('p')

//Variables
let prevGuess = []   //Stores all previous guesses.
let numGuess = 1     //Counts the number of guesses.
let playGame = true  //Game is running.

if(playGame){  //Click Event
    submit.addEventListener('click', function(e){   //listen for the Submit button click.
        e.preventDefault()                          //Stops the form from refreshing the page.
        const guess = parseInt(userInput.value)     //from the input box. , Converts it into a number.
        validateGuess(guess)                        //Checks whether the entered number is valid.
    })
}

function validateGuess(guess){ //validateGuess()
    if (isNaN(guess)) {                               //if user enter not a valid number
        alert('Please enter a valid number')
    }else if(guess<1){                                //Less than 1: Not allowed.
        alert('Please enter a number greater then 1') 
    }else if(guess>100){                              //Greater than 100: not allowed
        alert('Please enter a number less then 100')
    } else{
        prevGuess.push(guess)                      //Store the guess.Example 25 becomes [25]
        if(numGuess===11){                         //Last Chance: The player gets 10 chances.
            displayGuess(guess)                    //Display the guessed number.
            displayMessage(`game over random number was ${randomNumber}`) //Game Over: Random number was 67
            endGame()                               //Stop the game.
        }else{
            displayGuess(guess)                    //Display the guess and compare it with the random number.
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){                   //Correct number checking?
    if(guess===randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`number is too low`)
    }else if(guess>randomNumber){
        displayMessage('number is too high')
    }
}

function displayGuess(guess){    //displayGuess()
    userInput.value=''           //Clears the input box.
    guessSlot.innerHTML += `${guess} ` //Adds the guess.
    numGuess++                         //Increase guess count.
    remaining.innerHTML = `${11-numGuess}`//Shows remaining guesses.
}

function displayMessage(message){  //displayMessage(): shows the messages
    lowOrHi.innerHTML=`<h2>${message}</h2>`
} 

function endGame(){
    userInput.value=''                       //Clear input.
    userInput.setAttribute('disabled', '')   //Disable input and The user cannot type anymore.
    p.classList.add('button')                //Adds CSS class button.
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)                 //Adds it to the page.
    playGame = false                         //Stops the game.
    newGame()                                //Adds click event to the new game button.
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')  //Start New Game
    newGameButton.addEventListener('click', function(e){      //Wait until the user clicks it.
        randomNumber = (parseInt(Math.random()*100+1))        //Generate a new random number.
        prevGuess = []                                        //Clear previous guesses.
        numGuess = 1                                          //Reset attempts.
        guessSlot.innerHTML = ''                              //Clear guessed numbers.
        remaining.innerHTML = `${11-numGuess}`                //Reset remaining guesses.
        userInput.removeAttribute('disabled')                 //Enable the input box again.
        startOver.removeChild(p)                              //button
        playGame=true                                         //The game starts again.
    })
}

/*Complete Flow                 Page Loads
                                    │
                                    ▼
                                Generate Random Number
                                    │
                                    ▼
                                User Enters Guess
                                    │
                                    ▼
                                Validate Guess
                                    │
                                    ├───────────────┐
                                    │               │
                                Invalid          Valid
                                    │               │
                                Alert         Save Guess
                                                    │
                                                    ▼
                                            Compare Guess
                                                    │
                                        ┌───────────┼───────────┐
                                        ▼           ▼           ▼
                                    Too Low     Too High     Correct
                                        │           │           │
                                        └───────────┼───────────┘
                                                    ▼
                                            Attempts Finished?
                                                │          │
                                            No           Yes
                                            │            │
                                        Guess Again    End Game
                                                            │
                                                            ▼
                                                    Show "Start New Game"
                                                            │
                                                            ▼
                                                    Reset Everything
                                                            │
                                                            ▼
                                                    Play Again */

