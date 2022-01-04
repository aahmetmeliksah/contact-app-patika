import React from "react";
import { useState } from "react";

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const whenSubmitted = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      alert("Fill all of the blanks!!!");
      return false;
    }

    addContact([...contacts, form]);
    console.log(form);

    setForm({ fullname: "", phone_number: "" });
  };

  return (
    <form onSubmit={whenSubmitted}>
      <div>
        <input
          type="text"
          name="fullname"
          placeholder="Fullname"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>

      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
