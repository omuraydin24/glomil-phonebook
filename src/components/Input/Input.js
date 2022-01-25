import React from 'react';
import "./Input.css";

function Input({ placeholder, name, onChange, type, value }) {
  return <div>
    <input
      type={type}
      name={name}
      required="required"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>;
}

export default Input;
