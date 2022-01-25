import React from 'react';
import Input from '../Input';

function InputField({ onSubmitAdd, onChange }) {
  return <div>
    <form onSubmit={onSubmitAdd}>
      <Input placeholder={"Enter fullname"} onChange={onChange} type={"text"} name={"fullName"} />
      <Input placeholder={"Enter a phone number..."} onChange={onChange} type={"tel"} name={"phoneNumber"} />
      <Input placeholder={"Enter an email..."} onChange={onChange} type={"email"} name={"email"} />
      <button className="submit-button" type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  </div>;
}

export default InputField;
