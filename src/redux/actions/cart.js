import { ADD_PIZZA_CART, CLEAR_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM } from "../types/types"

export const addPizzaToCart=(pizzaObj)=>{
    return {
        type:ADD_PIZZA_CART,
        payload:pizzaObj
    }
}

export const clearCart=()=>{
    return {
        type:CLEAR_CART
    }
}

export const removeCartItem=(id,price,count)=>{
    return {
        type:REMOVE_CART_ITEM,
        payload:{id,price,count}
    }
}

export const plusCartItem=(id,price,count)=>{
    return {
        type:PLUS_CART_ITEM,
        payload:{id,price,count}
    }
}
export const minusCartItem=(id,price)=>{
    return {
        type:MINUS_CART_ITEM,
        payload:{id,price}
    }
}