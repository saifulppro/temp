// this file is contain all javascript file names
const apiKey = 'ca9e792df5f5d07544ef88035e7a1850';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => Ui(data))
}
const searchBtn = document.getElementById('submit');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('city').value;
    getWeatherData(inputCity)
})

const Ui = data => {
    document.getElementById('city_name').innerText = data.name || "Unknown Location!";
    document.getElementById('temp').innerText = data.main.temp;
    document.getElementById('leads').innerText = data.weather[0].main;
    document.getElementById('img').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value = "";
}
getWeatherData('Bhola')