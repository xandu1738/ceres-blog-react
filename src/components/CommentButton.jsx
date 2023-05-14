// import { useState } from "react";
import { FaComment } from "react-icons/fa";
const CommentButton = ({ showComment }) => {
  const comments = 0;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {showComment && (
        <FaComment
          onClick={showComment}
          className="icon"
          style={{ padding: "20px", color: "#777", cursor: "pointer" }}
        />
      )}
      <span>{comments} Comments</span>
    </div>
  );
};

export default CommentButton;
