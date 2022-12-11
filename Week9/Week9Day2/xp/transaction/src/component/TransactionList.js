import { connect } from "react-redux";
import TransactionForm from "./TransactionForm";
import { updateIndexOfTransaction } from '../redux/actions'
import {EditForm} from '../component/Edit_form'

// _WE USE FUNCTION COMPONENET as we dont need ______the state__________________________

const TransactionList = (props) => {
    
    const propss = props.list
    console.log(propss);
    return (
        <div>
            <TransactionForm />
            <hr />
            lea
            <div style={{textAlign:'center'}}>
      <table style={{border:'1px solid #000'}}><tbody>
        {
          props.list.map((item,index)=>{
            return(
              <tr key={index}>
                  <td>{item.account}</td>
                  <td>{item.fsc}</td>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td><button onClick={()=>props.index_change(index)}>Edit</button></td>
                  <td><button onClick={()=>props.index_change(index)}>Delete</button></td>
                </tr>
            )
          })
        }
        </tbody></table>
      </div>
            </div >

    )
}

// this is for from the global state to componement
const mapStateToProps = (state) => {
    console.log("curentindex in here", state);
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}


// this im dispatching to a global props - action then reducer 
const mapDispatchToProps = (dispatch) => {
    return {

        index_change: (id) => dispatch(updateIndexOfTransaction(id))
        deleter:(trx)=>dispatch(deleteransaction(trx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)