import {useGetWeatherByCityQuery} from "../features/api/weatherApi.ts";
import {useAppSelector} from "../app/hooks.ts";


const Weather = () => {
    const city = useAppSelector(state => state.city);
    const {data, error, isLoading} = useGetWeatherByCityQuery(city);


    if (!city) {
        return <div className={'infoWeath'}>Enter city name</div>;
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Enter correct city name</div>;
    }
    if (!data) {
        return null
    }


    const {name, sys: {country, sunset}, main: {temp, pressure}} = data

    const sunsetTime = new Date(+sunset * 1000).toLocaleString();

    return (
        <div className={'infoWeath'}>
            <p>Location: {country}, {name}</p>
            <p>Temp: {temp} </p>
            <p>Pressure: {pressure}</p>
            <p>Sunset: {sunsetTime}</p>
        </div>
    );
};

export default Weather;