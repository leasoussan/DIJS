export const INSERT_TRANSACTION=  'INSERT'
export const UPDATE_TANSACTION= 'UPDATE'
export const DELETE_TANSACTION= 'DELETE'
export const UPDATE_INDEX_TANSACTION= 'UPDATE-INDEX'





export const insert_trx= (trx)=>{
    return{
        type: INSERT_TRANSACTION, 
        payload:trx
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