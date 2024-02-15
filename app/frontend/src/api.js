import axios from "axios";

const OWM_API_KEY = "3a7c9da63552f741f703b56817b3e594";

const owmApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
});

const owmRequests = {
    fetchCurrentWeather: (lat, lon) => owmApi.get(`weather?lat=${lat}&lon=${lon}&appid=${OWM_API_KEY}`),
    fetchForecast: (lat, lon) => {return `forecast?lat=${lat}&lon=${lon}&appid=${OWM_API_KEY}`},
    fetchDailyForecast: (lat, lon) => {return `onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,alerts&appid=${OWM_API_KEY}`},
}

const metNoApi = axios.create({
    baseURL: 'https://api.met.no/weatherapi',
})

const yrApi = axios.create({
    baseURL: 'https://www.yr.no/api/v0/'
})

const yrRequests = {
    fetchForecast: (lat, lon) => yrApi.get(`locations/${lat},${lon}/forecast`)
}


export {owmRequests, yrRequests};