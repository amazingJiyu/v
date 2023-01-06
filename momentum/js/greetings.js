const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 string만 포함된 변수는 대문자로 표기 , string을 저장하고 싶을 때 사용함
const USERNAME_KEY = "username";

const link = document.querySelector("a");

function onLoginSubmit(tomato){
    // console.log("hello", loginInput.value);

    tomato.preventDefault(); //어떤 event의 기본 행동이든지 발생되지 않도록 막는거 , 이걸 호출하면 브라우저의 기본 동작을 막아 줌
    // const username = loginInput.value;
    // console.log(loginInput.value);
    // if(username === ""){
    //     alert("Please write your name");
    // } else if(username.length > 15) {
    //     alert("Your name is too long.")


    // }

    loginForm.classList.add("HIDDEN_CLASSNAME");
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);

    console.log(username);
    // greeting.innerText = "Hello " + username; 이렇게 써도 되고 밑에 처럼 써도 되는데 아래 방법을 더 선호함
    paintGreetings(username);
}

//loginButton.addEventListener("click", onLoginBtnClick);

// function handleLinkClick() {
//     alert("clicked!!");
// }

loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick)

// onLoginSubmit();

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

























/* 내가 푼 거


const generateNumber = document.getElementById("number1");
const guessNumber = document.getElementById("number2");
const playButton = document.getElementById("btnPlay");
const resultText = document.getElementById("result");
const guessNum = document.getElementById("guessNum");
const randomNum = document.getElementById("randomNum");
const p = document.querySelector("p");
// const input = document.querySelector("input");

function onLoginSubmit(e) {
  e.preventDefault();
  p.classList.remove("hidden");

  let numbers = [];

  for (var i = 0; i <= generateNumber.value; i++) {
    numbers.push(i);
  }

  let randomNumber = numbers[Math.ceil(Math.random() * generateNumber.value)];

  guessNum.innerText = guessNumber.value;
  randomNum.innerText = randomNumber;

  if (guessNum.innerText === randomNum.innerText) {
    resultText.innerText = "You won!";
  } else {
    resultText.innerText = "You Lost!";
  }
}

playButton.addEventListener("click", onLoginSubmit);



//html

<!DOCTYPE html>
<html>
  <head>
    <title>Vanilla Challenge</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <style>
      .hidden {
        display: none;
      }
    </style>
    <h1>Random Number Game</h1>

    <form>
      <h2>
        Generate a number between 0 and <input id="number1" type="number" />
      </h2>
      <h3>
        Guess the number : <input id="number2" type="number" />
        <button id="btnPlay">Play!</button>
      </h3>
      <p class="hidden">
        You chose : <span id="number1_value"></span>, the machine chose :
        <span id="machineNumber"></span>
      </p>
      <strong id="result"></strong>
    </form>

    <script src="src/index.js"></script>
  </body>
</html>
*/

/* 답
const guessForm = document.getElementById("js-guess");
const result = document.getElementById("js-result");
const maxNumber = document.getElementById("maxNumber");

function handleGuessSubmit(e) {
  e.preventDefault();
  const guessInput = guessForm.querySelector("input");
  if (guessInput.value === "" && maxNumber === "") {
    return;
  }
  const max = maxNumber.value;
  const random = Math.ceil(Math.random() * max);
  const userGuess = parseInt(guessInput.value, 10);
  const resultSpan = result.querySelector("span");
  resultSpan.innerHTML = `
  You chose: ${userGuess},
  the machine chose: ${random}.<br />
  <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
  `;
}

guessForm.addEventListener("submit", handleGuessSubmit);



//html
<!DOCTYPE html>
<html>
  <head>
    <title>JS Casino</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1>Random Number Game</h1>
    <div>
      <h3 class="js-title">
        Generate a number between 0 and <input id="maxNumber" type="number" />
      </h3>
    </div>
    <form id="js-guess">
      <label>Guess the number:</label>
      <input type="number" max="200" min="5" />
      <button>Play!</button>
    </form>
    <div id="js-result">
      <span></span>
    </div>
    <script src="src/index.js"></script>
  </body>
</html>


*/