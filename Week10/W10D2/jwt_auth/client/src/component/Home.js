import { useContext,useState,  useEffect } from "react";
import { AppContext } from "../App";


const Home =(props)=>{

    const {token} =useContext(AppContext);

    useEffect(()=>{
        console.log("go to home", token);
    },[token])
    //  we put token in the [ to use didmount]
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}
export default Home