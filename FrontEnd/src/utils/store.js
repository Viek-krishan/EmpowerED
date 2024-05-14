import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
  reducer: {
    search: searchSlice,
    user: userSlice,
  },
});

export default appStore;
