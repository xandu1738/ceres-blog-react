import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FaThumbsUp
        onClick={handleClick}
        className="icon"
        style={{
          padding: "20px",
          color: isLiked ? "blue" : "#777",
          cursor: "pointer",
        }}
      />
      <span>{likes} Likes</span>
    </div>
  );
};

export default LikeButton;
