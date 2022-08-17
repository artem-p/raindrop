import { OWM_API_KEY } from './api'

const owmRequests = {
    fetchCurrentWeather: (lat, lon) => {return `weather?lat=${lat}&lon=${lon}&appid=${OWM_API_KEY}`},
    fetchForecast: (lat, lon) => {return `forecast?lat=${lat}&lon=${lon}&appid=${OWM_API_KEY}`},
    fetchDailyForecast: (lat, lon) => {return `onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,alerts&appid=${OWM_API_KEY}`},

    fetchRadarData: "https://api.rainviewer.com/public/weather-maps.json",
}


export {owmRequests}