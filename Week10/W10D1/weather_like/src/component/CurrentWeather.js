// ths is instead of the searchWeather.js
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;


const CurrentWeather=(props)=>{
    const [currentWeather, setCurrentWeather] =useState('')
    const { city, cityKey, country} = useContext(AppContext)

    useEffect(() =>{
     if(cityKey){
        getCurrentWeather
     }   
    })

}

   return(
    <>

    <div>

    </div>
    </>
   ) 


export default CurrentWeather



// destruction with [] is an array 
// destruction {} is an onjects