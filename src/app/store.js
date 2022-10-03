import { configureStore } from "@reduxjs/toolkit";
import application from '../features/applicationSlice'

const store = configureStore({
    reducer: {
        application
    }
});

export default store;