import {INSERT_TRANSACTION, UPDATE_TANSACTION, DELETE_TANSACTION, UPDATE_INDEX_TANSACTION} from '../redux/actions.js'

const initState = {
    transactionList: [],
    currentIndex: 0
}


export const reducer = (state = initState, actions = {}) => {

    switch (actions.type) {
        case INSERT_TRANSACTION:
            console.log(actions.payload);
            return { ...state, transactionList: actions.payload, currentIndex:actions.payload }
        case UPDATE_TANSACTION:
            return { ...state}
        case DELETE_TANSACTION:
            return { ...state }
        case UPDATE_INDEX_TANSACTION:

            return { ...state, currentIndex:actions.payload}
        default:
            return { ...state }
    }

    return { ...state }
}