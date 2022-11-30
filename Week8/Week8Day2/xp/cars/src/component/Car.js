import React from 'react'
import Garage from './Garage';

// const Car =(props)=>{
//     constructor()
//     const {name, model} = props
//     return(
//         <h1> This car is called {name} {model}</h1>
//     )
// }

// export default Car

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state ={
        name: props.name,
        model: props.model,
        color: props.color,
        
        }
    }

    render(){
        return(
            <>
         <h1> This car is called {this.state.name} {this.state.model}</h1>
         <h2>And the {this.state.model} is {this.state.color}</h2>
         <Garage size="HUGE" />
         </>
        )
    }
} 


export default Car