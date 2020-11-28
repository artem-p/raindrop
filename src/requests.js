const API_KEY = "3a7c9da63552f741f703b56817b3e594";

const city = "Saint Petersburg, ru";

const requests = {
    fetchCurrentWeather: `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    fetchForecast: `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
}