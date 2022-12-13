import React, { useState, useEffect } from 'react'
import citySearch from '../data/locationsCities.json'


const SearchWeather = () => {

    const [cityList, setCityList] = useState([]);
    const [userInput, setUserInput] = useState('')
    const [selectedCity, setSelectedCity] = useState([])
    
    const apiKey = 'Y2jlkmxTv1oXcSORrdVqkDHIDuf0dP8L'


    useEffect(() => {

    }, [])

    
    const handleOnChange = (e) => {
        e.preventDefault();
        setUserInput(e.target.value)

        const getDataLocation = async () => {
            try {
                console.log(citySearch);
                setCityList(citySearch)
                // const respons = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${userInput}`)
                // const data = await respons.json()
                // console.log(data);
            }
            catch (e) {
                console.log(e);
            }
        };
        getDataLocation()

    }
    const searchedData = cityList.filter(item => {
        return item.LocalizedName.toLowerCase().includes(userInput.toLowerCase())

        })



    const getWeatherForcat = async (e) => {
        const getCityKeyCode = cityList
        const cityKey = e.target.value;
        // const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`)
        // const data = await response.json()
        // console.log(data);


    };


    // const getFivDayFrocast = 
    // fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/`)

    

    return (
        <>

            <label>Search a city with tel</label>
            <input type="text" placeholder='Search City that starts with TEL' onChange={handleOnChange} />


            <div className='city_list_display'>
                {
                    searchedData.map(item =>{
            
                        console.log(item);
                   

                        return (

                <div key={item.Key} className='city_item'>
                    <h3> {item.LocalizedName}</h3>
                    <button onClick={getWeatherForcat} value={item.Key}>CheckWeather</button>
                </div>

                )
            })

            }
          
            </div>
        </>
    )
}

export { SearchWeather }