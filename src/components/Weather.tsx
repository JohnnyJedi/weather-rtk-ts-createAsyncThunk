import {useAppSelector} from "../app/hooks.ts";


const Weather = () => {

    const {message,weather} = useAppSelector(state => state.weather);
    const{country,city,temp,pressure,sunset} = weather

    const formatSunset = new Date(+sunset * 1000);
    const sunsetTime = formatSunset.toLocaleString();




    if (message) {
        return (
            <div className={'infoWeath'}>{message}</div>
        )
    } else {
        return (
            <div className={'infoWeath'}>
                <p>Location: {country}, {city}</p>
                <p>Temp: {temp} </p>
                <p>Pressure: {pressure}</p>
                <p>Sunset: {sunsetTime}</p>
            </div>
        );
    }
};

export default Weather;