import { connect } from 'react-redux'
import { changePropTwo } from '../actions'

const NewComp = (props) => {



    return (
        <>
            <h1>Child </h1>
            <div>{props.mystage1fromstore}</div>
            {/* <button onClick={props.changes}>change prope two to prop 1</button> */}
            <button onClick={()=>props.changes(props.mystage1fromstore)}>change prope two to prop 1</button>

        </>
    )
}


const mapStateToProps = (state) => {
    return {
        mystage1fromstore: state.property_one

    }   
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changes: () => {
//             dispatch(changePropTwo())
//         }

//     }
// }

// with values
const mapDispatchToProps = (dispatch) => {
    return {
        changes: (a) => {
            return dispatch(changePropTwo(a))
    
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewComp)
