import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBanners } from "@/views/discover/c-views/recommend/service/recommend";

export const fetchBannerDataAction = createAsyncThunk("banner", async () => {
  const res = await getBanners();
  return res.banners;
});

interface IRecommendState {
  banners: any[];
}

const initialState: IRecommendState = {
  banners: [],
};

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerDataAction.pending, () => {
        console.log("pending");
      })
      .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
        // @ts-ignore
        state.banners = payload;
      })
      .addCase(fetchBannerDataAction.rejected, () => {
        console.log("rejected");
      });
  },
});
export default recommendSlice.reducer;
