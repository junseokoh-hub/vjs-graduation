
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const askYourName = document.querySelector("#ask");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    askYourName.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

const sideBar = document.querySelector(".side-bar");

function paintGreetings(username) {
    greeting.innerText = `Welcome, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    setTimeout(mainAppear);
    const h1 = document.createElement("h1");
    sideBar.insertBefore(h1, sideBar.childNodes[2]);
    h1.innerHTML= greeting.innerText;
}

function mainAppear() {
    const main = document.querySelector(".main");
    const nextBar = document.querySelector(".next-bar");
    sideBar.classList.add("appear");
    main.classList.add("appear");
    nextBar.classList.add("appear");
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    askYourName.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}