import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBanners } from "@/views/discover/c-views/recommend/service/recommend";
export const fetchBannerDataAction = createAsyncThunk("banner", async () => {
  const res = await getBanners();
  console.log(res);
  return res.data;
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
});

export default recommendSlice.reducer;
