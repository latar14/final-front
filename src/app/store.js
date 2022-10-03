import { configureStore } from "@reduxjs/toolkit";
import application from '../features/applicationSlice'
import product from "../features/productSlice";

const store = configureStore({
    reducer: {
        application,
        product
    }
});

export default store;