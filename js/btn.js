const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const wrapper = document.querySelector(".wrapper");
const h1 = document.querySelector(".side-bar h1");
const conditions = document.querySelector(".conditions");
const headerBar = document.querySelector(".header-bar");
const quoters = document.querySelector(".quotes")
const toDoContainer = document.querySelector(".todo-container");
const notice = document.querySelector(".todo-container h1");
const plusCircle = document.querySelector(".plus-circle");

function clickButton(event) {
    event.preventDefault();
    btn.classList.toggle("active");
    container.classList.toggle("active");
    wrapper.classList.toggle("active");
    h1.classList.toggle("active");
    conditions.classList.toggle("active");
    headerBar.classList.toggle("active");
    quoters.classList.toggle("active");
    toDoContainer.classList.toggle("active");
    toDoList.classList.toggle("active");
    notice.classList.toggle("active");
    plusCircle.classList.toggle("active");
}

btn.addEventListener("click", clickButton);