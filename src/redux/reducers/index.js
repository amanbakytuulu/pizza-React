import {combineReducers} from 'redux';
import pizzas from './pizzas';
import filters from './filters'
import cart from './cart'

const reducers={pizzas,filters,cart}

export const rootReducer=combineReducers(reducers);