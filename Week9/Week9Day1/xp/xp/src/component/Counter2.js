import React from "react";
import { connect } from "react-redux";

import { increaseCount, decreaseCount } from "../actions.js/action";
import Increase from "./Increase.js";
import Decrease from "./Decrease.js";



class Counter2 extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (

            <div style={{ border: "solid 3px red", width: "300px", marginLeft: "5rem" }}>
                <h1>        COUNTER
                </h1>

                <Decrease />

                {this.props.count}
                <Increase />


            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count,

    }

};

// we dont need dispatch because we separated the element


export default connect(mapStateToProps)(Counter2)
