const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-input");
const toDoAddButton = document.querySelector(".todo-button__add");
const toDoList = document.querySelector(".todo-list");

const TODOS = "todos"

let toDos = []; 


function addToDo(event) {
    event.preventDefault();
    const line = toDoInput.value;
    toDoInput.value = "";
    const lineObject = {
        text: line,
        id: Date.now(),
    }
    paintToDo(lineObject);
    toDos.push(lineObject);
    saveToDo();
}

function paintToDo (line) {
    //add li
    const myToDo = document.createElement("li");
    myToDo.classList.add("todo-mine");
    myToDo.id = line.id;
    myToDo.innerText = line.text;
    toDoList.appendChild(myToDo);
    //add check btn
    const checkButton = document.createElement("button");
    checkButton.classList.add("todo-button__check");
    checkButton.innerHTML = "<i class='fas fa-check'></i>"
    checkButton.addEventListener("click", removeToDo);
    myToDo.appendChild(checkButton);
    //add remove btn
    const removeButton = document.createElement("button");
    removeButton.classList.add("todo-button__remove");
    removeButton.innerHTML = "<i class='fas fa-trash'></i>"
    removeButton.addEventListener("click", removeToDo);
    myToDo.appendChild(removeButton);
}

function removeToDo(event) {
    const btn = event.target;
    const li = event.target.parentElement;
    if (btn.classList[0] === "todo-button__remove") {
        li.remove();
        toDos = toDos.filter((delId) => delId.id !== parseInt(li.id));
    }
    if(btn.classList[0] === "todo-button__check") {
        li.classList.toggle("checked");
    }
    saveToDo();
}


function saveToDo() {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem(TODOS);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

toDoAddButton.addEventListener("click", addToDo);
