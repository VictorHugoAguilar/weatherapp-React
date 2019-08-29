import { apiKey, url_base, metric } from "../../constants/api_url";

const getUrlWeatherByCity = city => {
    return `${url_base}?q=${city}&appid=${apiKey}${metric}`;
};

export default getUrlWeatherByCity;
