const month = document.querySelector(".month");
const others = document.querySelector(".clock");
const daysOfWeek = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function getClock() {
    const date = new Date();
    const year = date.getFullYear();
    const days = date.getDay();
    const nowDate = date.getDate();
    const months = date.getMonth();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const nowDay = daysOfWeek[days];
    const nowMonth = monthsOfYear[months]
    month.innerText = `${nowMonth}`;
    others.innerText =`${year} / ${nowDay}.${nowDate} / ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);