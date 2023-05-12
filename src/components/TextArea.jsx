import React from "react";

const TextArea = ({ id, label, name, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}: </label>
      <textarea id={id} name={name} rows="4" cols="50" value={value} onChange={onChange}/>
    </div>
  );
};

export default TextArea;
