const API_KEY = "3a7c9da63552f741f703b56817b3e594";

const requests = {
    fetchCurrentWeather: (lat, lon) => {return `weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`},
    fetchForecast: (lat, lon) => {return `forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`},
}

export default requests;