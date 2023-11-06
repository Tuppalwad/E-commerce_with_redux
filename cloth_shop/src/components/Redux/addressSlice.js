import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: null, // You can use `null` to represent no address set initially
  reducers: {
    setAddress: (state, action) => {
      return action.payload; // Set the address to the payload value
    },
    clearAddress: (state) => {
      return null; // Clear the address by setting it to null
    },
  },
});

export const { setAddress, clearAddress } = addressSlice.actions;
export default addressSlice.reducer;
