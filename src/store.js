
import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducer/auth";

const store = configureStore({
  reducer: {
    auth: auth,
  },
});

export default store;
