import React, { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@/views/discover/child-components/nav-bar";
interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </div>
  );
};
export default memo(Discover);
