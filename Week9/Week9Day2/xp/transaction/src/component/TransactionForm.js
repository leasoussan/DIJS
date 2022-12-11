import { connect } from "react-redux"
import React from "react";
import { insert_trx, updateTransaction } from '../redux/actions'


class TransactionForm extends React.Component {
    constructor() {
        super();
        this.state = {
            accountNumber: '',
            fsc: '',
            name: '',
            amount: '',
        }
    }

    // componentDidMount(){
    //     const getLastIndex = localStorage.getItem('transaction')
    //     // this.setState({current_index:})
    //     // this.setState({lastIndex : () => this.props.change_index(getLastIndex)}) 

    //     console.log(this.props.index);     
    // }


    // componentDidUpdate(prevProps, prevState, snapshot){
    //     const prevprop = prevProps.index;
    //     // const prevstae = prevS        localStorage.setItem(`transaction${}`, this.state)
    // }
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      if(this.props.currentIndex === -1){
        this.props.handleInsert(this.state)
      }
      else{
        this.props.handleUpdate(this.state)
      }
      this.setState({
        account:'',
        fsc:'',
        name:'',
        amount:''
      })
    }
    componentDidUpdate(prevProps,prevState){
      // console.log('prevProps=>' ,prevProps);
      // console.log('prevState=>' ,prevState);
      if(prevProps.currentIndex != this.props.currentIndex && this.props.currentIndex!=-1){
        const trx=this.props.list[this.props.currentIndex];
        // console.log('trx',trx);
        this.setState({
          account:trx.account ||'',
        fsc:trx.fsc||'',
        name:trx.name||'',
        amount:trx.amount||''
        })
      }
    }
    

      render(){
        return(
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.account} name='account' placeholder='Account Number' onChange={this.handleInputChange} type='text' /><br/>
            <input value={this.state.fsc} name='fsc' placeholder='FSC' onChange={this.handleInputChange} type='text' /><br/>
            <input value={this.state.name} name='name' placeholder='Name' onChange={this.handleInputChange} type='text' /><br/>
            <input value={this.state.amount} name='amount' placeholder='Amount' onChange={this.handleInputChange} type='text' /><br/>
            <input type='submit' value={this.props.currentIndex===-1 ? 'Submit' : 'Update' } />
          </form>
        )
      }
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
        insert: (trx) => dispatch(insert_trx(trx)),
        update: (trx) => dispatch(updateTransaction(trx)),
    }
}

// export default TransactionForm
export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)