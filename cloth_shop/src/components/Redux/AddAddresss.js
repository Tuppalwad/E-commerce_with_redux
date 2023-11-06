import { createSlice } from "@reduxjs/toolkit";


const addaddress = createSlice({
    name: 'addrescartopen',
    initialState: false,

    reducers: {
        setOpencart: (state, action) => {
            return state = action.payload.cartopen;
        },

    }
});

const { reducer, actions } = addaddress;
export const { setOpencart } = actions;
export default reducer;
