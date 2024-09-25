import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          
        />
        <input 
          type='tel'
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          placeholder="000-000-0000"
          required 
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <input 
          type='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input type="submit" />
      </form>
    </>
  );
};

