import axios from "axios";
// const url = process.env.NEXT_PUBLIC_API
const url = "https://api.openweathermap.org/data/2.5"

const api = axios.create({
    baseURL: `${url}`
});

export default api;