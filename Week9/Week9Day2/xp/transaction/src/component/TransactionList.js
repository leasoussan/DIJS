import { connect } from "react-redux";
import TransactionForm from "./TransactionForm";
import React from "react";

class TransactionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionList: props.list,
            currentIndex: props.index
        }
    }
    render() {
        console.log(this.state.transactionList)
        console.log(this.props.currentIndex);;

        return (

            <div>
                <TransactionForm />

                {localStorage.length}
                {/* {
                props.list.map((item, i) => {
                    return (
                        <div key={i}>
                            <h1> accountNumber {item.accountNumber}</h1>.
                            <h1> FSC {item.FSC}</h1>
                            <h1> Transaction name {item.transaction_name}</h1>
                            <h1> accountNumber {item.accountNumber}</h1>
                        </div>

                    )
                })

            } */}
                {/* {this.props.list} */}

            </div>
        )


    }
}

const mapStageToProps = (state) => {
    return {
        list: state.TransactionList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStageToProps, mapDispatchToProps)(TransactionList)