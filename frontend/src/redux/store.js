import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import homeReducer from "./reducer/homeSlice";
import blogReducer from "./reducer/blogSlice";
import rootSaga from "./saga/rootSaga";
import adminReducer, { reloadApi } from "./reducer/adminSlice";
import { userSlice } from "./reducer/userSlice";

import shopReducer, {
  shopFilter,
  shopFilterPrice,
  shopFilterSize,
  idProductDetailSlice,
} from "./reducer/shopSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    home: homeReducer,
    blog: blogReducer,
    shop: shopReducer,
    filter: shopFilter.reducer,
    filterPrice: shopFilterPrice.reducer,
    size: shopFilterSize.reducer,
    admin: adminReducer,
    reloadApi: reloadApi.reducer,
    idDetailProduct: idProductDetailSlice.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
