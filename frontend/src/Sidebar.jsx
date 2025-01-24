import React from "react";
import SidebarItem from "./SidebarItem";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Sidebar.css"

import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="sidebar">
      <SidebarItem
        selected={currentPath === "/"}
        Icon={HomeIcon}
        title="Home"
        path="/"
      />
      <SidebarItem
        selected={currentPath === "/trending"}
        Icon={WhatshotIcon}
        title="Trending"
        path="/trending"
      />
      <SidebarItem
        selected={currentPath === "/subscritions"}
        Icon={SubscriptionsIcon}
        title="Subscriptions"
        path="/subscriptions"
      />
      <hr />
      <SidebarItem
        selected={currentPath === "/library"}
        Icon={VideoLibraryIcon}
        title="Library"
        path="/library"
      />
      <SidebarItem
        selected={currentPath === "/history"}
        Icon={HistoryIcon}
        title="history"
        path="/history"
      />
      <SidebarItem
        selected={currentPath === "/your-videos"}
        Icon={OndemandVideoIcon}
        title="Your Videos"
        path="/your-videos"
      />
      <SidebarItem
        selected={currentPath === "/watch-later"}
        Icon={WatchLaterIcon}
        title="Watch Later"
        path="/watch-later"
      />
      <SidebarItem
        selected={currentPath === "/liked-videos"}
        Icon={ThumbUpIcon}
        title="Liked Videos"
        path="/liked-videos"
      />
      <SidebarItem
        selected={currentPath === "/show-more-videos"}
        Icon={ExpandMoreIcon}
        title="Show More"
        path="/show-more-videos"
      />
    </div>
  );
};

export default Sidebar;
