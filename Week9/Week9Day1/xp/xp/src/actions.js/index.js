
export const addOne = (value)=>{
    console.log("value+", value);
    // return an object from hewre tp the reducer - action in the reducer argument 
    return{
        type:'INCREASE_COUNT',
    }
}

export const subOne = (value)=>{

    // return an object from hewre tp the reducer - action in the reducer argument 
    return{
        type:'DECREASE_COUNT',
    }
}

