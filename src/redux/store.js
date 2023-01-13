import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./reducers/taskReducer";

import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const rootReducer = combineReducers({
  taskReducer: taskReducer //whenever we have to add our function from reducers folder
});

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
export let persistor = persistStore(store);