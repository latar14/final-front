import { configureStore } from "@reduxjs/toolkit";
import application from '../features/applicationSlice'
import product from "../features/productSlice";
import category from "../features/categorySlice";

const store = configureStore({
    reducer: {
        application,
        product,
        category,
    }
});

export default store;