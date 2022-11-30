import React from "react";

class Events extends React.Component {
    constructor(props) {
        super(props); {
            this.state = {
                text: "",
                isToggleOn: true
            }
        }
    }

    clickMe = (e) => {
        e.preventDefault();
        alert('Who woke me UP? ')
    }

    handleonChange = (e) => {
        this.setState({ text: e.target.value })
        // console.log(this.state.text);
    }

    handleKeyPress = (e) => {
        // console.log("hola",e);
        // this.setState({text:e.target.key})
        if (e.key === "Enter") {
            this.setState({ text: e.target.value })
            return alert(this.state.text);
        }
}

    handleSwitch = (e)=>{
        this.setState(prevState =>(
            {isToggleOn: !prevState.isToggleOn}));
        console.log(e);
    }

    render() {

        return (
            <>
                <input onKeyPress={this.handleKeyPress} onChange={this.handleonChange} />
                <button onClick={this.clickMe}>Clock Here</button>
                <button onClick={this.handleSwitch}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
            </>

        )
    }
}


export default Events