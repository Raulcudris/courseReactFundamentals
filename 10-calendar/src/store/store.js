import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice, uiSlice } from "./index";

export const store = configureStore({
    reducer:{
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer
    }
})