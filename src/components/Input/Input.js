import React from 'react';

function Input({ title, placeholder, name, onChange, type, value }) {
  return <div>
    <p>{title}</p>
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
