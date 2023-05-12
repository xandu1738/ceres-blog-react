import React from "react";
import { FaThumbsUp, FaComment } from "react-icons/fa";

const BlogList = ({ id,title, body, uploaded_by, date, onLike, onComment }) => {
  return (
    <div>
      <div className="blog-card">
        <h3 className="blog-title">{title}</h3>
        <div className="blog-body">{body}</div>
        <div className="uploaded-by">{uploaded_by}</div>
        <div className="publish-date">{date}</div>
        <div className="card-actions">
          <FaThumbsUp
            onClick={()=>{onLike(id)}}
            className="icon"
            style={{ padding: "20px", color:"#777", cursor: "pointer" }}
          />
          <FaComment
            onClick={()=>{onComment(id)}}
            className="icon"
            style={{ padding: "20px", color:"#777", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogList;
