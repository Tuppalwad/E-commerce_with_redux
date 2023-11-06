import { createSlice } from "@reduxjs/toolkit";


const carditms = createSlice({
    name: 'cartopen',
    initialState: false,
    reducers: {
        setOpen: (state, action) => {
            return state = action.payload.cartopen;
        },

    }
});

const { reducer, actions } = carditms;
export const { setOpen } = actions;
export default reducer;
