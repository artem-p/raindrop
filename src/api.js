import axios from "axios";

const owmApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
});

const metNoApi = axios.create({
    baseURL: 'https://api.met.no/weatherapi',
})

export {owmApi, metNoApi};