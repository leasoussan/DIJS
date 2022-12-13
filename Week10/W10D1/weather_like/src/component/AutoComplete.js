// ths is instead of the searchWeather.js
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;


const AutoComplete = (props) => {
    const [sugessstion, setSuggestions] = useState([]);
    const { setCity, setCityKey, setCountry } = useContext(AppContext)


    const getSuggestion = (value) => {
        // fetch(`${BASE_URL}/location/v1/autocomplete?apikey=${API_KEY}&q=${value}`)
        //     .then(res => res.json())
        //     .then(data => {
        //     setSuggestions(data)
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     })
    }
    getSuggestion()
    return (
        <div className="Autocomplete">
            <input type='text' onChange={((e) => { getSuggestion(e.target.value) })} />
            <ul>{
                sugessstion.map(item => {
                    return (
                        <div>
                            <li key={item.key} onClick={(e)=>{
                                setCityKey(item.key);
                                setCity(item.LocalizeName);
                                setCountry((item.Country.LocalizeName))
                            }}>
                                {item.LocalizeName}
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
export default AutoComplete