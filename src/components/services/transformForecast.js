import moment from "moment";
// para poner el locale en español
import 'moment/locale/es';
import transformWeather from '../services/transformWeather';

const transformForecast = data => (
    data.list.filter(item => (
            moment.unix(item.dt).hour() === 2 ||
            moment.unix(item.dt).hour() === 11 ||
            moment.unix(item.dt).hour() === 20
        )
    ).map(item => (
        {
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))
);

export default transformForecast;
