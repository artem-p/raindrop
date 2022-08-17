import axios from "axios";

const OWM_API_KEY = "3a7c9da63552f741f703b56817b3e594";

const owmApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
});

const metNoApi = axios.create({
    baseURL: 'https://api.met.no/weatherapi',
})

export {owmApi, metNoApi, OWM_API_KEY};