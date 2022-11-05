import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import homeReducer from "./reducer/homeSlice";
import blogReducer from "./reducer/blogSlice";
import rootSaga from "./saga/rootSaga";
import adminReducer from "./reducer/adminSlice";

import shopReducer, {
  shopFilter,
  shopFilterPrice,
  shopFilterSize,
} from "./reducer/shopSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    home: homeReducer,
    blog: blogReducer,
    shop: shopReducer,
    filter: shopFilter.reducer,
    filterPrice: shopFilterPrice.reducer,
    size: shopFilterSize.reducer,
    // tag: blogFilterTag.reducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
