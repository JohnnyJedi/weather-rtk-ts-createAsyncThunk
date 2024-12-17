import React, {useState} from "react";
import {fetchWeather} from "../features/api.ts";
import {useAppDispatch} from "../app/hooks.ts";


const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const getCity = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchWeather(city));
        setCity('');
    }


    return (
        <form onSubmit={getCity}>
            <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                value={city}
                placeholder="Enter city"
            />
            <button type="submit">Get Weather</button>
        </form>
    );
}

export default Form;