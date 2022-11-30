import React from "react";

class Events extends React.Component {
    constructor(props) {
        super(props); {
            this.state = {
                text:"",
                text2:""
            }
        }
    }

    clickMe = (e) => {
        e.preventDefault();
        alert('Who woke me UP? ')
    }

    // handleChange = (e) => {
    //     this.setState({text:e.target.value})
    // }
    
    handleKeyPress=(e)=>{   
        // this.setState({text:e.target.value})
        if(e.keyCode  === 13){
            console.log("e", e.target.value);
        }
    }

    render() {

        return (
            <>
                <input onKeyPress={this.handleKeyPress}/>
                <button onClick={this.clickMe}>Clock Here</button>
            </>

        )
    }
}


export default Events