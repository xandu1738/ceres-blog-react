import React, { useState } from "react";

const CommentForm = () => {
  const [comments, setComments] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target.comment.value;
    const newComment = { id: Date.now(), content: userInput };

    setComments([...comments, newComment]);
    e.target.comment.value = "";
  };
  return (
    <div style={{ paddingBottom: "10px" }}>
      <form className="comment" onSubmit={handleSubmit}>
        <input
          type="text"
          className="c-form"
          name="comment"
          id="comment"
          placeholder="Add a comment"
        />
        <input type="submit" value="comment" />
      </form>
      {comments.map((comment) => (
        <div className="comment-card">
          <p>
            <span>James Gunn: </span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentForm;
