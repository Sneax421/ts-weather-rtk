import {FormEvent} from "react";
import {fetchWeather} from "../features/api/asyncWeatherAction.ts";
import {useAppDispatch} from "../app/hook.ts";

// interface Props {
//     getWeather: (city: string) => void;
// }

const Form = () => {

    const dispatch = useAppDispatch();

    const handleGetWeather = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        dispatch(fetchWeather(city));
    }

    return (
        <form onSubmit={handleGetWeather}>
            <input type={'text'} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;