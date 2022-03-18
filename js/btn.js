const body = document.querySelector("body");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const wrapper = document.querySelector(".wrapper");
const h1 = document.querySelector(".side-bar h1");
const conditions = document.querySelector(".conditions");
const headerBar = document.querySelector(".header-bar");
const quoters = document.querySelector(".quotes")

function clickButton(event) {
    event.preventDefault();
    body.classList.toggle("active");
    btn.classList.toggle("active");
    container.classList.toggle("active");
    wrapper.classList.toggle("active");
    h1.classList.toggle("active");
    conditions.classList.toggle("active");
    headerBar.classList.toggle("active");
    quoters.classList.toggle("active");
}

btn.addEventListener("click", clickButton);