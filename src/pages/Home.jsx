import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BlockLoader, Categories, PizzaBlock, SortPopUp } from '../components';
import { addPizzaToCart } from '../redux/actions/cart';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [{ name: 'популярности', type: 'rating', order: 'desc' }, { name: 'цене', type: 'price', order: 'desc' }, { name: 'алфавиту', type: 'name', order: 'asc' }]

const Home = React.memo(function Home() {

    const items = useSelector(({ pizzas }) => pizzas.items); 
    const cartItems = useSelector(({cart})=> cart.items);
    const isLoaded = useSelector(state => state.pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) =>  filters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas(category,sortBy));
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((obj) => {
        dispatch(setSortBy(obj));
    }, []);

    const handleAddPizzaToCart=React.useCallback((obj)=>{
        dispatch(addPizzaToCart(obj))
    },[]);
    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickCategory={onSelectCategory}
                    activeCategory={category} items={categoryNames} />
                <SortPopUp items={sortNames} onClickSortType={onSelectSortType}
                    activeSortType={sortBy.type} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map((obj) => {
                    return <PizzaBlock onClickAddPizza={handleAddPizzaToCart} key={obj.id} addedCount={cartItems[obj.id] && cartItems[obj.id].length} {...obj} />
                }) :
                    Array(12)
                        .fill(0)
                        .map((_, index) => <BlockLoader key={index} />)
                }
            </div>
        </div>
    )
})

export default Home;
