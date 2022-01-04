import { useState, useEffect } from "react";
import List from "./Contacts/List";
import Form from "./Form";
import "./style.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Alperen",
      phone_number: 1234,
    },
    {
      fullname: "Micheal",
      phone_number: 324532,
    },
    {
      fullname: "Dana",
      phone_number: 32453425,
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
