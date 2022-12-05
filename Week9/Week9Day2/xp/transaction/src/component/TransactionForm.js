import { connect } from "react-redux"
import React from "react";
import { insertTransaction, updateTransaction,updateIndexOfTransaction } from '../redux/actions'


class TransactionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountNumber: '',
            fsc: '',
            transaction_name: '',
            amount: '',
            current_index:0,
        }
    }

    componentDidMount(){
        const getLastIndex = localStorage.getItem('transaction')
        // this.setState({current_index:})
        // this.setState({lastIndex : () => this.props.change_index(getLastIndex)}) 

        console.log(this.props.index);     
    }


    componentDidUpdate(prevProps, prevState, snapshot){
        const prevprop = prevProps.index;
        // const prevstae = prevS        localStorage.setItem(`transaction${}`, this.state)
    }
    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        localStorage.setItem(`transaction-${this.currentIndex}`, this.state)
        e.target.reset()
    }

    render() {
        // const locatStorageData = localStorage.getItem("transactionList")
        // console.log("locatStorageData", locatStorageData);
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: "column", width: "300px" }}>
                    accountNumber:<input name="accountNumber" type="text" onChange={this.handleInputChange} />
                    FSC: <input name="fsc" type="text" onChange={this.handleInputChange} />
                    name:<input name="transaction_name" type="text" onChange={this.handleInputChange} />
                    amount:<input name="amount" type="number" onChange={this.handleInputChange} />
                    <input type='submit' value='Submit' onClick={() => this.props.insert((this.state))} />
                </form>
               
            </div>
        )
    }
}
// this is for from the global state to componement
const mapStateToProps = (state) => {
    console.log("curentindex in here", state);
    return {
        transactionList: state.transactionList,
        index: state.currentIndex
    }
}
// this im dispatching to a global props - action then reducer 
const mapDispatchToProps = (dispatch) => {
    return {
        insert: (transaction, index) => dispatch(insertTransaction(transaction,index)),
        update: (transaction) => dispatch(updateTransaction(transaction)),
        // index_change: (id)=> dispatch(updateIndexOfTransaction)(id)
    }
}

// export default TransactionForm
export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)