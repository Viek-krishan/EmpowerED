import { configureStore } from "@reduxjs/toolkit";
import FoodCartSlice from "./FoodCartSlice";

const store = configureStore({
    reducer:{
        FoodCart:FoodCartSlice,
    }
});

export default store;