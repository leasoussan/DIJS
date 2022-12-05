import { connect } from "react-redux";
import { decreaseCount } from "../actions.js/action";

const Decrease = (props) =>{
    return(
        <button onClick={()=> props.dispatch(decreaseCount)}>+</button>
        // or        <button onClick={()=> props.dispatch({type:'DECREASE_COUNT'})}>+</button>

    )
}

export default connect()(Decrease)


// insteade of mapdispatch - the dispatch is calling an action so we do it here