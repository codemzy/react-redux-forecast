import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = ':8081/api/forecast/';

export function fetchWeather(city) {
    const URL = ROOT_URL + city;
    const REQUEST = axios.get(URL);
    return {
        type: FETCH_WEATHER,
        payload: REQUEST
    };
}