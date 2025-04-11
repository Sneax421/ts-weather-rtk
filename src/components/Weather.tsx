// import {WeatherInfo} from "../utils/types";
import {useSelector} from "react-redux";

// interface Props {
//     message: string,
//     weather: Partial<WeatherInfo>
// }

const Weather = () => {
    const message = useSelector(state => state.message);
    const weather = useSelector(state => state.weatherInfo);

    if (message) {
        return (
            <div className={'infoWeath'}>{message}</div>
        )
    } else {
        return (
            <div className={'infoWeath'}>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {(new Date(weather.sunset! * 1000)).toLocaleTimeString()}</p>
            </div>
        );
    }
};

export default Weather;