import React, { useState } from "react";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";

const AddBlog = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please enter a title for your blog");
    }
    onAdd({ title, body });
    setTitle("");
    setBody("");
  };
  return (
    <div className="blog-form">
      <h3>Publish Article</h3>
      <form onSubmit={onSubmit}>
        <TextInput
          id="title"
          label="Blog Title: "
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title"
          type="text"
        />
        <TextArea
          id="blog-body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          label="Blog Body"
          name="blog-text"
        />
        <input
          type="submit"
          value="submit"
          className="button"
          style={{
            backgroundColor: "green",
            border: "none",
            // cursor: "pointer",
            color: "white",
          }}
        />
      </form>
    </div>
  );
};

export default AddBlog;
