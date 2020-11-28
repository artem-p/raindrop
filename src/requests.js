const API_KEY = "3a7c9da63552f741f703b56817b3e594";

const city = "Saint Petersburg, ru";

const requests = {
    fetchCurrentWeather: `weather?q=${city}&appid=${API_KEY}`,
    fetchForecast: `forecast?q=${city}&appid=${API_KEY}`
}