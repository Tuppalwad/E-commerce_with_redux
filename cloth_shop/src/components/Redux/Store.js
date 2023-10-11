import { configureStore } from '@reduxjs/toolkit';
import ScliceCard from './SliceCard';
import CartItemShow from './CartItemShow';
const store = configureStore({
    reducer: {
        cart: ScliceCard,
        cartopen: CartItemShow,

    },
});



export default store;