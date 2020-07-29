/**
 * Weather App
 */

// API_KEY for maps api
let API_KEY = "715f32be2a8ac7e482ef604c07651ebf";

/**
 * Retrieve weather data from openweathermap
 "https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=715f32be2a8ac7e482ef604c07651ebf&units=imperial";*/
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather?";
  const FULL_URL = `${URL}q=${city}&appid=${API_KEY}&units=Metric`;


  const weatherPromise  = fetch(FULL_URL)
  return weatherPromise.then((response) => {
    return response.json();
  })
}

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((res)=>{
    console.log(res)
    showWeatherData(res);
  }).catch((error)=>{
    console.log(error);
    console.log("Something happend");
  })
}

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  document.getElementById("weather-output").classList.add('visible');
}
