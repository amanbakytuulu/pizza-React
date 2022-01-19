import { SET_LOADED, SET_PIZZA } from "../types/types"

const initialState={
    items:[],
    isLoaded:false
}


const pizzas=(state=initialState,action)=>{
    switch(action.type)
    {
        case SET_PIZZA:
            return {
                ...state,
                items:action.payload,
            }
        case SET_LOADED:
            return {
                ...state,
                isLoaded:action.payload
            }
        default:
            return state;
    }
}

export default pizzas;