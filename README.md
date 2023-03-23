<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Momentum</title>
</head>
<body>
    
    <section id="sec1">
        <form class="hidden" id="login-form">
            <input maxlength="15" required type="text" placeholder="what is your name?" />
            <button>Log In</button>
        </form>  

        <h1 class="hidden" id="greeting"></h1>
    </section>
    
    <section id="sec2">
     <h2 id="clock">00:00</h2>
    </section>
    
    <section id="sec3">
        <form action="" id="todo-form">
            <input type="text" placeholder="Write a To Do and Press Enter" required />
        </form>
        <ul id="todo-list"></ul>
    </section>

    <section id="sec4">
        <div id="quote">
            "<i></i>"<br>
            - <strong></strong>
        </div>
    </section>

    <section id="sec5">
        <div id="weather">
            <span></span>
            <span></span>
        </div>
    </section>
    
    <section id="sec6">
        <button>Give me color</button>
    </section>

    <script src="js/greetings.js"></script>
    <script src="js/clock.js"></script>
    <script src="js/quotes.js"></script>
    <script src="js/background.js"></script>
    <script src="js/todo.js"></script>
    <script src="js/weather.js"></script>
    <!-- 보통 스크립트는 뒤에 적어줌 -->
</body>
</html>



