// import { useState } from "react";
import { FaComment } from "react-icons/fa";
const CommentButton = () => {
  const comments = 0;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <FaComment
        onClick={() => {}}
        className="icon"
        style={{ padding: "20px", color: "#777", cursor: "pointer" }}
      />

      <span>{comments} Comments</span>
    </div>
  );
};

export default CommentButton;
