import React from "react";
import { addOne, subOne } from '../actions.js'
import { connect, Provider } from 'react-redux';
import { render } from "@testing-library/react";



class Counter extends React.Component {
constructor(props){
    super(props);


//     increaseCount = (e) => {
//         this.props.addOne
// console.log("increase", e);    
// }


//     decreaseCount = (e) => {
//         // this.props.dispatch({ type: 'DECREASE_COUNT' });
//         console.log("decrease", e);    

//     }
}
    render() {
        return (
            
                <div style={{ border: "solid 3px red", width: "300px", marginLeft: "5rem" }}>
                    <h1>        COUNTER
                    </h1>


                    <button onClick={()=>this.props.add(this.props.count)}>+</button>
                    {this.props.count}

                    <button onClick={()=>this.props.sub(this.props.count)}>-</button>


                </div>

            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count,

    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => {dispatch(addOne())},
        sub: ()=>{dispatch(subOne())},
        
        }}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)
