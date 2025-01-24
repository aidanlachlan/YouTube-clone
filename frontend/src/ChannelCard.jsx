import "./ChannelCard.css";
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from "react";

const ChannelCard = ({
  image,
  channel,
  verified,
  subs,
  numOfVideos,
  description,
}) => {
  return <div className="channelCard">
    <Avatar className="channelCardLogo" src={image} />
    <div className="channelCardText">
        <h4>
            {channel}{verified && <CheckCircleIcon style={{color: "gray"}} />}
        </h4>
        <p>
            {subs} subscribers . {numOfVideos} videos
        </p>
        <p>
            {description}
        </p>
    </div>
  </div>;
};

export default ChannelCard;
