import { SET_CATEGORY, SET_SORT_BY } from "../types/types";

export const setSortBy=({type,order})=>({
    type:SET_SORT_BY,
    payload:{type,order}
})

export const setCategory=(cartId)=>({
    type:SET_CATEGORY,
    payload:cartId
})

