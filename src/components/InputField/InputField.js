import React from 'react';
import Input from '../Input';

function InputField({onSubmitAdd, onChange}) {
  return <div>
    <form onSubmit={onSubmitAdd}>
      <Input className="form-input" placeholder={"Enter fullname"} onChange={onChange} type={"text"} name={"fullName"} title={"Full Name"} />
      <Input className="form-input" placeholder={"Enter a phone number..."} onChange={onChange} type={"tel"} name={"phoneNumber"} title={"Phone Number"} />
      <Input className="form-input" placeholder={"Enter an email..."} onChange={onChange} type={"email"} name={"email"} title={"E mail"} />
      <button className="submit-button" type="submit">Add</button>
    </form>
  </div>;
}

export default InputField;
