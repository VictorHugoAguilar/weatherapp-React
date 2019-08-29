import { SUN } from "../../constants/weather";

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);

    const data = {
        humidity,
        temperature: temp,
        weatherState,
        wind: `${speed} m/s`
    };
    return data;
};

const getWeatherState = weather_data => {
    return SUN;
};

export default transformWeather;
