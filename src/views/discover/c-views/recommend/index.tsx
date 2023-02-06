import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import zcrRequest from "@/service";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  // 测试网络请求
  useEffect(() => {
    zcrRequest
      .get({
        url: "/banner",
      })
      .then((res) => {
        console.log(res);
      });
  });
  return <div>Recommend</div>;
};
export default memo(Recommend);
