import { call, put, takeLatest } from "redux-saga/effects";
import { homeSlice } from "../reducer/homeSlice";
import { blogSlice } from "../reducer/blogSlice";
import { bestSaleSlice } from "../reducer/bestSaleSlice";
import { shopSlice } from "../reducer/shopSlice";
import { adminSlice } from "../reducer/adminSlice";
import * as api from "../../api/api";

function* fetchHomeSaga(action) {
  const homeApi = yield call(api.fetchHomeApi);
  // console.log("home api: ", homeApi);
  yield put(homeSlice.actions.getHomeSuccess(homeApi.data));
}

function* fetchBlogSaga(action) {
  const blogApi = yield call(api.fetchBlogApi);
  // console.log(blogApi);
  yield put(blogSlice.actions.getBlogSuccess(blogApi.data));
}

function* fetchBestSaleSaga(action) {
  const bestSale = yield call(api.fetchBestSaleApi);
  // console.log(bestSale);
  yield put(bestSaleSlice.actions.getBestSaleSuccess(bestSale.data));
}

function* fetchShopSaga(action) {
  const shop = yield call(api.fetchShopApi);
  // console.log(shop);
  yield put(shopSlice.actions.getShopSuccess(shop.data));
}

function* fetchAdminSaga(action) {
  const admin = yield call(api.fetchAdminApi);
  // console.log(admin);
  yield put(adminSlice.actions.getAdminSuccess(admin.data));
}

function* rootSaga() {
  console.log("rootsaga");
  yield takeLatest(homeSlice.actions.getHomeRequest, fetchHomeSaga);
  yield takeLatest(blogSlice.actions.getBlogRequest, fetchBlogSaga);
  yield takeLatest(bestSaleSlice.actions.getBestSaleRequest, fetchBestSaleSaga);
  yield takeLatest(shopSlice.actions.getShopRequest, fetchShopSaga);
  yield takeLatest(adminSlice.actions.getAdminRequest, fetchAdminSaga);
}

export default rootSaga;
