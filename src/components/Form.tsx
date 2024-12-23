import React, {useState} from "react";


interface Props {
    setCity: (city: string) => void;
}

const Form = ({setCity}:Props) => {
    const [cityName, setCityName] = useState('');


    const getCity = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCity(cityName)
        setCityName('');
    }


    return (
        <form onSubmit={getCity}>
            <input
                onChange={(e) => setCityName(e.target.value)}
                type="text"
                value={cityName}
                placeholder="Enter city"
            />
            <button type="submit">Get Weather</button>
        </form>
    );
}

export default Form;