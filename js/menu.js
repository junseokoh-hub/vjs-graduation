const circle = document.querySelector(".plus-circle");
const facebook = document.querySelector(".facebook");
const instagram = document.querySelector(".instagram");
const twitter = document.querySelector(".twitter");
const youtube = document.querySelector(".youtube");
const nomadcoders = document.querySelector(".nomadcoders");



function openMenu() {
    circle.classList.toggle("rotate");
    facebook.classList.toggle("open");
    instagram.classList.toggle("open");
    twitter.classList.toggle("open");
    youtube.classList.toggle("open");
    nomadcoders.classList.toggle("open");
}

circle.addEventListener("click", openMenu);