export const OWM_API_KEY = "3a7c9da63552f741f703b56817b3e594";

const requests = {
    fetchCurrentWeather: (lat, lon) => {return `weather?lat=${lat}&lon=${lon}&appid=${OWM_API_KEY}`},
    fetchForecast: (lat, lon) => {return `forecast?lat=${lat}&lon=${lon}&appid=${OWM_API_KEY}`},
    fetchDailyForecast: (lat, lon) => {return `onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,alerts&appid=${OWM_API_KEY}`}
}


export default requests;