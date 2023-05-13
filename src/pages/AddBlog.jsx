import React, { useState } from "react";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";

const AddBlog = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date_published, setDate] = useState("");
  const [uploaded_by, setUploadedBy] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please enter a title for your blog");
      return;
    }
    onAdd({ title, body, uploaded_by, date_published });
    setTitle("");
    setBody("");
    setUploadedBy("");
    setDate(new Date());
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
        <TextInput
          id="uploaded_by"
          label="Uploaded By: "
          value={uploaded_by}
          onChange={(e) => {
            setUploadedBy(e.target.value);
          }}
          placeholder="..."
          type="text"
        />
        <TextInput
          id="date"
          label="Date: "
          value={date_published}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          placeholder=""
          type="date"
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
