import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { NavWrapper } from "@/views/discover/child-components/nav-bar/style";
import { discoverMenu } from "@/assets/data/local_data";

interface IProps {
  children?: ReactNode;
}

const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          );
        })}
      </div>
    </NavWrapper>
  );
};
export default memo(NavBar);
