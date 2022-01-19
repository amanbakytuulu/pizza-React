import {put,call,takeEvery} from 'redux-saga/effects';
import { pizzaAPI } from '../../api';
import { SET_LOADED, SET_PIZZA } from "../types/types";


export const setLoaded=(payload)=>{
    return {
        type:SET_LOADED,
        payload
    }
}

export const fetchPizzas = (category,sortBy) => async (dispatch) => {
    dispatch(setLoaded(false));
    const data = await pizzaAPI.getPizzas(category,sortBy)
    dispatch(setPizza(data.data));
    dispatch(setLoaded(true));
}


const setPizza = (pizza) => ({
    type: SET_PIZZA,
    payload: pizza
})
