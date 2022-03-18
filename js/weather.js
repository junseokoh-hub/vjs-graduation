const API_KEY = "ea1d690989788495b5f0d7c3fcb8cbf2";

function onGeoOk(position){
    const lat= position.coords.latitude;
    const lon= position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const  city= document.querySelector(".city");
        const weather = document.querySelector(".weather");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);