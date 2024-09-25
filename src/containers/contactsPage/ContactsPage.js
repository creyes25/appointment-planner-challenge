import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contactsList, addNewContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [email, setEmail] = useState('')
  const [contactExists, setContactExists] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if(!contactExists) {
      addNewContact(name, phoneNum, email)
      setName('')
      setPhoneNum('')
      setEmail('')
    }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    const exists = contactsList.some(contact => contact.name === name);
    setContactExists(exists)
  }, [name, contactsList])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          phone={phoneNum}
          email={email}
          setName={setName}
          setPhone={setPhoneNum}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contactsList={contactsList} />
      </section>
    </div>
  );
};
