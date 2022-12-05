export const INCREASE_COUNT = 'INCREASE_COUNT'
export const DECREASE_COUNT = 'DECREASE_COUNT'

// you write like this to keep the type in a variable - this avoid mistakes


export const increaseCount =()=>{
    return{
        type:INCREASE_COUNT
    }
}

export const decreaseCount =()=>{
    return{
        type:DECREASE_COUNT
    }
}