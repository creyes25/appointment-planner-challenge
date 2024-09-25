import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";




function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([])
  const [appointments, setAppointments] = useState([])

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addNewContact = (name, phoneNum, email) => {
    setContacts([
      ...contacts, 
      {
      name: name,
      phoneNumber: phoneNum,
      email: email 
      }
    ])
  }

  const newAppointment = (name, contact, date, time) => {
    setAppointments([
      ...appointments,
      {
        name: name,
        contact: contact,
        date: date,
        time: time
      }
    ])
  }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route 
        path={ROUTES.CONTACTS} 
        element={ <ContactsPage contactsList={contacts} addNewContact= {addNewContact} /> }/>
      <Route 
        path={ROUTES.APPOINTMENTS} 
        element={ <AppointmentsPage appointments={appointments} contacts={contacts} newAppointment={newAppointment} />  }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
