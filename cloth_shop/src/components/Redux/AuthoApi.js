import { createSlice } from '@reduxjs/toolkit';

const authoroute = createSlice({
    name: 'authoroute',
    initialState: { autho: false,phone:""},
    reducers: {
        autho: (state, action) => {
            return { autho: action.payload.autho,phone:action.payload.phone };
        },
    },
});

const { reducer, actions } = authoroute;
export const { autho } = actions;
export default reducer;
