

import {useAppSelector} from "../app/hook.ts";


const Weather = () => {
    const message = useAppSelector(state => state.message);
    const weather = useAppSelector(state => state.weatherInfo);

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