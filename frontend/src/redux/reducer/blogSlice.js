import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {
    getBlogRequest: (state) => {
      state.data = [];
      state.isLoading = true;
    },
    getBlogSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getBlogFailure: (state) => {
      state.isLoading = false;
      state.data = [];
    },
  },
});

// export const blogFilterTag = createSlice({
//   name: "tag",
//   initialState: {
//     isFilterTag: false,
//     tag: "",
//   },
//   reducers: {
//     SetTag(state, action) {
//       state.isFilterTag = true;
//       if (state.tag.includes(action.payload)) {
//         console.log("trùng");
//         state.tag = "";
//       } else {
//         state.tag = action.payload;
//       }
//     },
//   },
// });

export const { getBlogRequest, getBlogFailure, getBlogSuccess } =
  blogSlice.actions;

export default blogSlice.reducer;
