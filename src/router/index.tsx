import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
// import Discover from '@/views/discover'
// import Mine from '@/views/mine'
// import Download from '@/views/download'
// import Focus from '@/views/focus'
const Discover = lazy(() => import("@/views/discover"));
const Mine = lazy(() => import("@/views/mine"));
const Download = lazy(() => import("@/views/download"));
const Focus = lazy(() => import("@/views/focus"));
const Recommend = lazy(() => import("@/views/discover/c-views/recommend"));
const Songs = lazy(() => import("@/views/discover/c-views/songs"));
const DjRadio = lazy(() => import("@/views/discover/c-views/djradio"));
const Album = lazy(() => import("@/views/discover/c-views/album"));
const Artist = lazy(() => import("@/views/discover/c-views/artist"));
const Ranking = lazy(() => import("@/views/discover/c-views/ranking"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        element: <Recommend />,
      },
      {
        path: "/discover/ranking",
        element: <Ranking />,
      },
      {
        path: "/discover/artist",
        element: <Artist />,
      },
      {
        path: "/discover/album",
        element: <Album />,
      },
      {
        path: "/discover/djradio",
        element: <DjRadio />,
      },
      {
        path: "/discover/songs",
        element: <Songs />,
      },
    ],
  },
  {
    path: "/mine",
    element: <Mine />,
  },
  {
    path: "/focus",
    element: <Focus />,
  },
  {
    path: "/download",
    element: <Download />,
  },
];
export default routes;
