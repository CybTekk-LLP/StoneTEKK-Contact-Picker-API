import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

const contactDetailSlice = createSlice({
  name: "contactDetailSlice",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state[action.payload.email] = action.payload;
    },
    remove: (state, action) => {
      delete state[action.payload];
    },
  },
});

export const { add, remove } = contactDetailSlice.actions;
export default contactDetailSlice.reducer;
