import { createSlice } from '@reduxjs/toolkit';

const authoroute = createSlice({
    name: 'authoroute',
    initialState: false,
    reducers: {
        autho: (state, action) => {
            return state = action.payload.autho;
        },
    },
});

const { reducer, actions } = authoroute;
export const { autho } = actions;
export default reducer;
