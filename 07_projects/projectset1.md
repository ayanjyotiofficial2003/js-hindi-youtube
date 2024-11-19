# Projects Related to DOM

## Project link (Stack Blitz)

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

### Solution Code for Project 1

```javascripts

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){

  console.log(button);
  button.addEventListener('click', function(e){

    console.log(e);
    console.log(e.target);   
    
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }

    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }

    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }

    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }  

  })

})

```


### Solution Code for Project 2

```javascripts

const form = document.querySelector('form');
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please provide a valid height: ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please provide a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let review = '';

    if (bmi < 18.6) {
      review = `Under Weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      review = `Normal Range`;
    } else if (bmi >= 24.9) {
      review = `Over Weight`;
    }

    // show the results
    results.innerHTML = `<span> ${bmi} </span> <br> <span> ${review} </span> `;
  }
});

```


### Solution Code for Project 3

```javascripts

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


### Solution Code for Project 4

```javascripts

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid Number');
  } else if (guess < 1) {
    alert('Please enter a Number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a Number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was : ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it correct`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your Number is TOOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Your Number is TOOOO high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame"> Start New Game </h2>`;
  startOver.appendChild(p);
  playGame = false;

  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    userInput.removeAttribute('disabled');
    prevGuess = [];
    guessSlot.innerHTML = '';
    numGuess = 1;
    lowOrHi.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    startOver.removeChild(p);

    playGame = true;
  });
}

```



### Solution Code for Project 5

```javascripts

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'color'> 

  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td> ${e.key === ' ' ? 'Space' : e.key} </td>
    <td> ${e.keyCode} </td>
    <td> ${e.code} </td>
  </tr>
</table>

  </div>
  `;
});

```