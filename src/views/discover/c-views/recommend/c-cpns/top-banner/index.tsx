import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { useAppSelector } from "@/store";
import { shallowEqual } from "react-redux";

interface IProps {
  children?: ReactNode;
}

const TopBanner: FC<IProps> = () => {
  /*从store中获取数据*/
  // @ts-ignore
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners,
    }),
    shallowEqual
  );
  return (
    <div>
      {banners.map((item) => {
        return <div key={item.imageUrl}>{item.imageUrl}</div>;
      })}
    </div>
  );
};
export default memo(TopBanner);
