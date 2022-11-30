import React from "react";

class Phone extends React.Component {
    constructor() {
        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        }
    }
    changeColor=(e)=>{
        this.setState({color:"blue"})
        const display = document.querySelector("#phone");
        display.style.border ="solid 5px orange"
        }

    render() {
     
        return (
            <>
            <div style={{border:"solid grey 3px"}} id="phone">
            <h1>{this.state.brand}</h1>
            <h4>The {this.state.model} is {this.state.color}, and is from {this.state.year}</h4>
            <button onClick={this.changeColor}>Change Color</button>
        </div>
        
            </>
        )
    }
}


export default Phone