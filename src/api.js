import axios from 'axios';

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/'
})

export const pizzaAPI = {
    getPizzas: (category,sortBy) => instanse
    .get(`pizzas?${category !==null ?`category=${category}`:''}&_sort=${sortBy.type}&_order=${sortBy.order}`)

}