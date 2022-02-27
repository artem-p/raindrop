import axios from "axios";

const owmApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
});

export default owmApi;