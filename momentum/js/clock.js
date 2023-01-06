const clock = document.querySelector("h2#clock");

// clock.innerText = "lalalala";

function getClock() {
  const date = new Date(); // Date 라는 오브젝트는 시간을 가져옴
  const hours = String(date.getHours()).padStart(2, "0"); // date.getHours 는 number니까 앞에 string을 붙여주면 string으로 바뀜
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 바로실행
setInterval(getClock, 1000); // 이거 안하면 숫자 업데이트 안 됨


// 1)인터벌 Interval
// setInterval(sayHello, 5000);
// 1: function 2: ms(밀리세컨)
// 5초 지날 때마다 함수 실행 됨


// 2) 셋타임아웃 setTimeout 
// setTimeout(sayHello, 5000);
// 일정시간이 지난 뒤에 함수 실행되게


/* 3) padStart 
"1".padStart(2, "0") = '01'
"12".padStart(2, "0") = '12"
"hello".padStart(20, "x"); = 'xxxxxxxxxxxxxxxhello'
*/


/* 과제 내가 한 거 
const clockTitle = document.querySelector(".js-clock");

function dday() {
  const eve = new Date("2023-12-24");
  const date = new Date();

  const diff = eve - date;

  const day = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hours = String(Math.floor(diff / (1000 * 60 * 60)) % 24).padStart(2, "0");
  const minutes = String(Math.floor(diff / (1000 * 60)) % 60).padStart(2, "0");
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

dday();
setInterval(dday, 1000);

//html
<!DOCTYPE html>
<html>
  <head>
    <title>Time Until Christmas Eve<</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1>Time Until Christmas Eve</h1>
    <h2 class="js-clock"></h2>
    <script src="src/index.js"></script>
  </body>
</html>

*/

















/*
답

const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
  const now = new Date();
  // This is in milisecondsx
  const difference = new Date(xmasDay - now);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;
  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

getTime();
setInterval(getTime, 1000);

*/