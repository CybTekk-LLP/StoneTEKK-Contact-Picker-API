import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const contactDetailSlice = createSlice({
  name: "contactDetailSlice",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { add } = contactDetailSlice.actions;
export default contactDetailSlice.reducer;
