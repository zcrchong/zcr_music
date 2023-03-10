import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { fetchBannerDataAction } from "@/views/discover/c-views/recommend/store/recommend";
import TopBanner from "@/views/discover/c-views/recommend/c-cpns/top-banner";
interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBannerDataAction());
  }, []);
  return (
    <div>
      <TopBanner />
      Recommend
    </div>
  );
};
export default memo(Recommend);
