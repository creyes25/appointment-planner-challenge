import React from "react";

export const ContactPicker = ({
  contacts,
  onChange,
  value,
  name
}) => {
  return (
    <>
      <select name={name} onChange={onChange} value={value} >
        <option value='' defaultChecked>No Contact Selected</option>
        {contacts.map((contact, idx) => {
          return (
            <option key={idx} value={contact.name}>{contact.name}</option>
          )
        })}
      </select>
    </>
  );
};
