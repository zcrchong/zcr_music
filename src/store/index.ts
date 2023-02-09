import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import recommendReducer from "../views/discover/c-views/recommend/store/recommend";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
  },
});

// 封装类型动态检测
type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default store;
