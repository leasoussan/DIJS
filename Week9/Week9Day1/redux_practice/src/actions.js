// here we declatre an action> a function return an OBJECT 
export const changePropOne = (value)=>{
    // return an object from hewre tp the reducer - action in the reducer argument 
    return{
        type:'PROP_ONE',
        payload: value
    }
}

// this object is sent to the reducer action


// // without value we get it from state
// export const changePropTwo = (b) =>{
//     console.log(b);
//     return{
//         type:'PROP_TWO',
//         payload:b
//     }
// }

export const changePropTwo = (b) =>{
    return{
        type:'PROP_TWO',
        payload:b
    }
}