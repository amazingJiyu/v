const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(a){
    const li = a.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; //newTodo 가 text랑 id로 구분돼서
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}



function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;    
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//     console.log("this is the turn of", item);

// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos!== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
    // parsedToDos.forEach((item) => console.log("this is the turn of", item)); // 화살표 함수 
}


/* filter를 쓸려면 무조건 return을 해야함
function sexyFilter(){

}

[1,2,3,4].filter(sexyFilter) // 이거는 sexyFilter 함수를 4번 부르는 거야

이런식으로 
sexyFilter(1) = 1
sexyFilter(2) = 2
sexyFilter(3) = 3
sexyFilter(4) = 4

*/