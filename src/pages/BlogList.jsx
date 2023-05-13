import React from "react";
import { FaThumbsUp, FaComment } from "react-icons/fa";

const BlogList = ({ onLike, onComment, posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div className="blog-card" key={post.id}>
          <h3 className="blog-title">{post.title} </h3>
          <div className="blog-body">{post.body}</div>
          <div className="uploaded-by">{post.uploaded_by}</div>
          <div className="publish-date">{post.date}</div>
          <div className="card-actions">
            <FaThumbsUp
              onClick={onLike(post.id)}
              className="icon"
              style={{ padding: "20px", color: "#777", cursor: "pointer" }}
            />
            <FaComment
              onClick={onComment}
              className="icon"
              style={{ padding: "20px", color: "#777", cursor: "pointer" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
