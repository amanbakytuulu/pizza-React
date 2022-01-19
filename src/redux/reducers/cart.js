import { ADD_PIZZA_CART, CLEAR_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM } from "../types/types";

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}



const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_CART: {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id] ?
                    [action.payload] :
                    [...state.items[action.payload.id], action.payload]
            }
            // const allPizzas=[].concat(...Object.values(newItems));
            // const totalPrice=allPizzas.reduce((sum,obj)=>obj.price+sum,0);

            return {
                ...state,
                items: newItems,
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + action.payload.price
                // totalCount:allPizzas.length,
                // totalPrice
            }
        }
        case CLEAR_CART:
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        case REMOVE_CART_ITEM:
            {
            const newItems = {
                ...state.items
            }
            delete newItems[action.payload.id];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - action.payload.price,
                totalCount: state.totalCount - action.payload.count
            }
        }
        case MINUS_CART_ITEM:{
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: [...state.items[action.payload.id].slice(1)]
                },
                totalPrice: state.totalPrice - action.payload.price,
                totalCount: state.totalCount - 1
            }
        }
        case PLUS_CART_ITEM:{
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: [
                        ...state.items[action.payload.id], state.items[action.payload.id][0]
                    ]
                },
                totalPrice: state.totalPrice + action.payload.price,
                totalCount: state.totalCount + 1
            }
        }
        default:
            return state;
    }
}


export default cart;