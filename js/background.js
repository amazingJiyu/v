/* 이미지 랜덤
const images = [
    "main_ico1.png",
    "main_ico2.png",
    "main_ico3.png",
    "main_ico4.png",
    "main_ico5.png",
]


const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

*/

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const sec = document.querySelector("#sec6");
const btn = sec.querySelector("button");

function handleClick() {
  const a = colors[Math.floor(Math.random() * colors.length)];
  const b = colors[Math.floor(Math.random() * colors.length)];
  if (a === b) {
    return handleClick();
  }
  sec.style.background = `linear-gradient(to left, ${a}, ${b})`;
}

btn.addEventListener("click", handleClick);


/*과제
내가 한거 
const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const button = document.querySelector("button");

function changeColors() {
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

button.addEventListener("click", changeColors);



//html
<!DOCTYPE html>
<html>
  <head>
    <title>Vanilla Challenge</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="src/style.css" />
  </head>

  <body>
    <button>Give me color</button>
    <script src="src/index.js"></script>
  </body>
</html>



//정답
const btn = document.querySelector("button");

function handleClick() {
  const a = colors[Math.floor(Math.random() * colors.length)];
  const b = colors[Math.floor(Math.random() * colors.length)];
  if (a === b) {
    return handleClick();
  }
  document.body.style.background = `linear-gradient(to left, ${a}, ${b})`;
}

btn.addEventListener("click", handleClick);

*/