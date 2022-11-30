import React from "react";

// *
// 1. create a new react App - errorhandler
// 2. Create a new Class Component - Counter - components folder
// 2. State should have a count state = 0
// 3. Click on a button - set this state count + 1
// */

// with propos
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: props.a
        }
    }

    addOne = (e) => {
        this.setState({count:this.state.count +1})
        // console.log(e);
    }

    render() {
        if(this.state.count >5){
            throw Error("Too many times ")
        }
        return (
            <>
            {this.state.count}
            <button onClick={this.addOne}>AddOne </button>
            </>
            
        )
    }
}

// class Counter extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             count: 0
//         }
//     }

//     addOne = (e) => {
//         this.setState({count:this.state.count +1})
//         console.log(e);
//     }

//     render() {
//         // if()
//         return (
//             <>
//             {this.state.count}
//             <button onClick={this.addOne}>AddOne </button>
//             </>
            
//         )
//     }
// }


export default Counter