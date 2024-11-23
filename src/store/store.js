import { configureStore } from "@reduxjs/toolkit";
import contactDetailSlice from "./contactDetailSlice";

const store = configureStore({
    reducer: {
        contactData: contactDetailSlice
    }
})

export default store;