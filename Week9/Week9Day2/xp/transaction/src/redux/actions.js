export const INSERT_TRANSACTION=  'INSERT'
export const UPDATE_TANSACTION= 'UPDATE'
export const DELETE_TANSACTION= 'DELETE'
export const UPDATE_INDEX_TANSACTION= 'UPDATE-INDEX'





export const insertTransaction = (data)=>{
    return{
        type: INSERT_TRANSACTION, 
        payload:data
    }
}

export const updateTransaction = (data)=>{
    return{
        type: UPDATE_TANSACTION, 
        payload:data
    }
}
export const deleteransaction = (id)=>{
    return{
        type: DELETE_TANSACTION, 
        payload:id
    }
}
export const updateIndexOfTransaction = (index)=>{
    return{
        type: UPDATE_INDEX_TANSACTION, 
        payload:index
    }
}