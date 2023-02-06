import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter";
import { TypedUseSelectorHook, useSelector } from "react-redux";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// 封装类型动态检测
type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default store;
