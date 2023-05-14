// import React, { useState } from "react";
import LikeButton from "../components/LikeButton";
import CommentButton from "../components/CommentButton";
import CommentForm from "../components/CommentForm";

const BlogList = ({ posts }) => {
  // const [showComments, setShowComments] = useState(false);
  return (
    <div>
      {posts.map((post) => (
        <div className="blog-card" key={post.id}>
          <h3 className="blog-title">{post.title} </h3>
          <div className="blog-body">{post.body}</div>
          <div className="uploaded-by">{post.uploaded_by}</div>
          <div className="publish-date">{post.date}</div>
          <div className="card-actions">
            <div
              style={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LikeButton />
              <CommentButton />
            </div>
            <hr />
            <>
              <CommentForm />
            </>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
