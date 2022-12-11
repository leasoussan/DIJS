import { INSERT_TRANSACTION, UPDATE_TANSACTION, DELETE_TANSACTION, UPDATE_INDEX_TANSACTION } from '../redux/actions.js'
import { addToLocatStorage, getFromLocalStorage } from '../helpers/storage.js'
const initState = {
    list: getFromLocalStorage('trx'),
    currentIndex: -1
}


export const reducer = (state = initState, action = {}) => {

    switch (action.type) {
        
        case INSERT_TRANSACTION:
            const newlist = [...state.list]      
            newlist.push(action.payload);
            addToLocatStorage('trx', newlist)
            return { ...state, list: newlist, currentIndex: -1 }

        case UPDATE_TANSACTION:
            state.list[state.currentIndex] =action.payload
            addToLocatStorage('trx', [...state.list])

            return{ ...state, list:[state.list], currentIndex:-1}
        
        case DELETE_TANSACTION:
            state.list.splice(action.payload, 1)
            addToLocatStorage('trx', [...state.list])
            
            return { ...state , list:[...state.list], currentIndex:-1}
        
        case UPDATE_INDEX_TANSACTION:
            addToLocatStorage('trx', [...state.list])
            return {...state, currentIndex:action.payload}
      
        default:
            return { ...state }
    }

    return { ...state }
}