import React from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelCard from "./ChannelCard";
import SearchedVideoCard from "./SearchedVideoCard";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPageFilter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelCard
        image="https://lh3.googleusercontent.com/ogw/ADGmqu9w_Cw19wmoiSvUJ_XYlA3xZLXal_-a8Ja3Z6UG-A=s83-c-mo"
        channel="Md Adil Hossain"
        verified
        subs="1M"
        numOfVideos={20}
        description="Build your Carrier here in programming in this Channel"
      />
      <hr />
      <SearchedVideoCard
        title="How to become a web developer"
        views="2.3M"
        timestamp="3 days ago"
        subs="1M"
        channelImage="https://lh3.googleusercontent.com/ogw/ADGmqu9w_Cw19wmoiSvUJ_XYlA3xZLXal_-a8Ja3Z6UG-A=s83-c-mo"
        description="In this video we are gonna learn how to make a text small"
        channel="Md Adil Hossain"
        image="https://media.istockphoto.com/id/157639696/photo/purple-space-stars.jpg?s=612x612&w=0&k=20&c=fkLtGZxUS9UPlLJUTeGjvvURT0u-vtxvj5sAYbDNrH4="
      />
    </div>
  );
};

export default SearchPage;
