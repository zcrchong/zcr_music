import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import {
  HeaderLeft,
  HeaderWrapper,
  HeaderRight,
} from "@/components/app-header/style";
import headerTitles from '@/assets/data/header_titles.json'
import { Link } from 'react-router-dom'
interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  function showItem(item: any) {
    if (item.type === 'path'){
      return <Link to={item.link}>{item.title}</Link>
    } else {
      return(
        <a href={item.link} rel="noreferrer" target="_blank" >{item.title}</a>
      )
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
            <div className='title-list'>
              {
                headerTitles.map((item)=>{
                  return(
                    <div className='item' key={item.title}>
                      { showItem(item) }
                    </div>
                  )
                }
                )
              }
             </div>
          </HeaderLeft>
          <HeaderRight>right</HeaderRight>
        </div>
      </HeaderWrapper>
    </div>
  );
};
export default memo(AppHeader);
