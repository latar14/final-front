import { configureStore } from "@reduxjs/toolkit";
import application from '../features/applicationSlice'
import product from "../features/productSlice";
import category from "../features/categorySlice";
import user from "../features/userSlice"

const store = configureStore({
    reducer: {
        application,
        product,
        category,
        user
    }
});

export default store;