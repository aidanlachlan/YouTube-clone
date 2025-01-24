import React, { useEffect } from "react";
import { useState } from "react";
import Logo from "./assets/yt_logo_rgb_light.png";
import { Link } from "react-router-dom";
import "./Header.css";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from '@mui/icons-material/Close';


const Header = ({toggleSidebar}) => {
  const [searchQuery, setSearchQuery] = useState(``);
  const [showSearch, setShowSearch] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px");
    const handleMediaChange = () => setIsSmallScreen(mediaQuery.matches);
    handleMediaChange();
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div className="header">
      {!showSearch && (
        <div className="headerLeft">
          <MenuIcon onClick={toggleSidebar}/>
          <Link to="/">
            <img src={Logo} className="headerLogo" alt="" />
          </Link>
        </div>
      )}
      <div
        className="searchInput"
        style={{
          flex: isSmallScreen && showSearch ? 1 : isSmallScreen && 0,
          display:
            isSmallScreen && showSearch ? "flex" : isSmallScreen && "none",
          margin: "auto",
        }}
      >
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(element) => setSearchQuery(element.target.value)}
        />
        <Link to={`/search/${searchQuery}`}>
          <SearchIcon className="searchButton" />
        </Link>
      </div>
      {showSearch && (
        <CloseIcon className="closeButton" onClick={() => setShowSearch(false)} />
      )}
      {!showSearch && (
        <div className="headerIcons">
          {isSmallScreen && !showSearch && (
            <SearchIcon
              className="searchToggleIcon headerIcon"
              onClick={() => {
                setShowSearch(true);
              }}
            />
          )}
          <VideoCallIcon className="headerIcon" />
          <NotificationsIcon className="headerIcon" />
          <AccountCircleIcon className="headerIcon" />
        </div>
      )}
    </div>
  );
};

export default Header;
