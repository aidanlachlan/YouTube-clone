import React, { useEffect, useState } from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import HomeVideos from "./HomeVideos";
import "./App.css";
import TrendingVideos from "./TrendingVideos";
import SearchPage from "./SearchPage";
import VideoPlayPage from "./VideoPlayPage";


const App = () => {
  const [isSideBarVisible, setIsSidebarVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaChange = () => setIsSmallScreen(mediaQuery.matches)
    handleMediaChange();
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  })
  useEffect(() => {
    if(isSmallScreen) {
      setIsSidebarVisible(false);
    }
    else {
      setIsSidebarVisible(true)
    }
  }, [isSmallScreen]);
  const toggleSidebar = () => {
    setIsSidebarVisible(prev => !prev)
  }
  return (
    <BrowserRouter>
      <Header toggleSidebar={toggleSidebar}/>
      <div className="appContainer">
        {isSideBarVisible && <Sidebar />}
        <div style={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={<HomeVideos />} />
            <Route path="/trending" element={<TrendingVideos />} />
            <Route path="/search/:searchQuery" element={<SearchPage />} />
            <Route path="/videoplaypage/:videoId" element={<VideoPlayPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
