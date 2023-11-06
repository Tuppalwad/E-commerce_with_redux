import { configureStore } from '@reduxjs/toolkit';
import ScliceCard from './SliceCard';
import CartItemShow from './CartItemShow';
import AuthoApi from './AuthoApi';
import addrescartopen from './AddAddresss';
import Products from "./Allproducts"
import addressReducer from './addressSlice';
const store = configureStore({
    reducer: {
        cart: ScliceCard,
        cartopen: CartItemShow,
        AuthoApi: AuthoApi,
        addrescartopen: addrescartopen,
        Products: Products,
        address: addressReducer,
       
    },
});



export default store;