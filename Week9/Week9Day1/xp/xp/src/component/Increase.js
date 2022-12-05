import { connect } from "react-redux";
import { increaseCount } from "../actions.js/action";


const Increase = propse =>{
    return(
        <button>+</button>
    )
}

export default connect()(Increase)