import React from "react";

const TextInput = ({ id, label, placeholder, type, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} value={value} onChange={onChange} id={id} placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
