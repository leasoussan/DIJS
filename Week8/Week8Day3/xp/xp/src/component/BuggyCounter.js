import React from 'react';



class BuggyCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }

    }

handleClick =(e)=>{
    this.setState({counter: this.state.counter + 1})
    // {counter:this.state.counter++}
    if(this.state.counter >= 4){
        throw new Error ("crushed the party")
    }

}

    render() {
        return (
            <>
            {this.state.counter}
                <button onClick={this.handleClick}>CLICK HERE </button>

            </>
        )

    }
}

export default BuggyCounter