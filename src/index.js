// Form
let cityInput = document.querySelector("body > div.center > form > input");
let unitInput = document.querySelector("body > div.center > form > select");
const searchBtn = document.querySelector("body > div.center > form > button");

//Info
let weatherImg = document.getElementById("weather-img");
let weather = document.getElementById("weather");
let weatherDesc = document.getElementById("weather-desc");
let temperature = document.getElementById("temperature");

async function send(city, unit) {
    let response = ""
    
    if (location.protocol === 'http:') {
        response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + unit + "&appid=41821696537e54c713cabebb762dddad", {mode: "cors"});
    } else {
        response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + unit + "&appid=41821696537e54c713cabebb762dddad", {mode: "cors"});
    }
    
    const resData = await response.json();
    const imgData = resData.weather[0].icon;
    weatherImg.src = "https://openweathermap.org/img/w/" + imgData + ".png";
    weather.innerHTML = resData.weather[0].main;
    weatherDesc.innerHTML = resData.weather[0].description;
    temperature.innerHTML = resData.main.temp;
}

searchBtn.addEventListener("click", function() {
    send(cityInput.value, unitInput.value);
});

send("tokyo", "imperial");