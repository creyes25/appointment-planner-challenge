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
      setName(name)
      setPhoneNum(phoneNum)
      setEmail(email)
    } else {
      contactExists(false)
    }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    contactsList.forEach((contact) => {
      if(contact.name === name ) {
        setContactExists(true)
      }
    })
  }, [name])

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
