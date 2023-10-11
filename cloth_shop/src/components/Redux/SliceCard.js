import { createSlice } from '@reduxjs/toolkit';

const ScliceCard = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            const check = state.findIndex(item => item.id === action.payload.id);
            if (check !== -1) {
                state[check].quantity += 1;
            } else {
                state.push(action.payload);
            }
        },
        removeCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        }
    }
});

const { reducer, actions } = ScliceCard;
export const { addCart, removeCart, increaseCart, decreaseCart } = actions;
export default reducer;