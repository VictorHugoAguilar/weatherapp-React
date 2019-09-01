import {
    CLOUD,
    RAIN,
    SUN,
    SNOW,
    THUNDER,
    DRIZZLE
} from "../../constants/weather";

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);

    const data = {
        humidity,
        temperature: temp,
        weatherState,
        wind: `${speed} m/s`
    };
    return data;
};

const getWeatherState = weather => {
    const { id } = weather;
    // console.log(id);
    if (id < 300) return THUNDER;
    else if (id < 400) return DRIZZLE;
    else if (id < 600) return RAIN;
    else if (id < 700) return SNOW;
    else if (id === 800) return SUN;
    else return CLOUD;
};

export default transformWeather;
