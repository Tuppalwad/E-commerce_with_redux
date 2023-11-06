import { createSlice } from '@reduxjs/toolkit';

const ScliceCard = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            // add data in it initial state 
            state.push(action.payload);
        },
        //    update by usig id
        update: (state, action) => {

            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = action.payload;
        },
        removeCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        }
    }
});

const { reducer, actions } = ScliceCard;
export const { addCart, removeCart, increaseCart, decreaseCart, update } = actions;
export default reducer;