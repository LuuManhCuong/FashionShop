import { call, put, takeLatest } from "redux-saga/effects";
import { homeSlice } from "../reducer/homeSlice";
import * as api from "../../api/api";
import { blogSlice } from "../reducer/blogSlice";

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

function* rootSaga() {
  console.log("rootsaga");
  yield takeLatest(homeSlice.actions.getHomeRequest, fetchHomeSaga);
  yield takeLatest(blogSlice.actions.getBlogRequest, fetchBlogSaga);
}

export default rootSaga;
