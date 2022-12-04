
let initState={
    property_one:'one',
    property_two:'two',
  
}

//the reducer has two arguments- state and action 
// export const reducer =(state=initState, action)=>{
//     // return{...state}1
//     //1 we are clonning of the object init state with a default for state 
//     //now we this reducer will be imported in the store
//     // wo go to index.js >>>to creat e2 things 
//     //if I want to change property one i need to do the change on the return
//     // 2 whn i want to change something
//     return{...state, property_one:action.payload}
//     // we have acces to action.type and action.payload
    
// }

export const reducer =(state=initState, action={})=>{
    switch (action.type){
        case 'PROP_ONE':
            return {...state, property_one:action.payload};
        case 'PROP_TWO':
            return {...state, property_two:action.payload};

        default:
            return {...state}
    }

    // return{...state, property_one:action.payload}
    // // we have acces to action.type and action.payload
    
}