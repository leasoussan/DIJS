
let initState ={
    count :0
}


export const reducer = (state=initState, action={})=>{
    switch(action.type){
        case 'INCREASE_COUNT':
            console.log(state.count);
            return state +1;
        case 'DECREASE_COUNT':
            return state-1;
        default:
            return {...state}
    }
}