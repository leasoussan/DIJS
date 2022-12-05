import { DECREASE_COUNT, INCREASE_COUNT } from "../actions.js/action"

const initStata={
    count:0
}


export const reducer =(state,action={})=>{
    // retruning an object clone of our action 
    switch(action.type){
        case INCREASE_COUNT:
         return {...state, count:state.count +1}
        case INCREASE_COUNT:
         return {...state, count:state.count +1}
    }

    return {...state}


}



// see this ex with store and not appjs
