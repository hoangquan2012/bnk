import {
  combineReducers,
  configureStore,
  createStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import auth from "./reducer/auth";
import thunk from "redux-thunk";
import skillReducer from "./reducer/skillSlice";
import logger from 'redux-logger';

const rootReducer = combineReducers({
  skill: skillReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export default store;
