import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  HeaderLeft,
  HeaderWrapper,
  HeaderRight,
} from "@/components/app-header/style";
import headerTitles from "@/assets/data/header_titles.json";
import { NavLink } from "react-router-dom";
interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  function showItem(item: any) {
    if (item.type === "path") {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      );
    }
  }
  return (
    <div>
      <HeaderWrapper>
        <div className="content wrap-v1">
          <HeaderLeft>
            <a className="logo sprite_01" href="/">
              网易云音乐
            </a>
            <div className="title-list">
              {headerTitles.map((item) => {
                return (
                  <div className="item" key={item.title}>
                    {showItem(item)}
                  </div>
                );
              })}
            </div>
          </HeaderLeft>
          <HeaderRight>
            <Input
              placeholder="音乐/视频/电台/用户"
              className="search"
              prefix={<SearchOutlined />}
            />
            <span className="center">创作者中心</span>
            <span className="login">登录</span>
          </HeaderRight>
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
    </div>
  );
};
export default memo(AppHeader);
