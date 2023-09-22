import React, { useState } from "react";
import { FormButton, FormContacts, LabelContacts } from "./ContactForm.styled";
import { useDispatch } from "react-redux";
import { addContacts } from "redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { store } from "redux/store";


export const ContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", number: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() === "" || formData.number.trim() === "") {
      
      return;
    }

    const newContact = {
      id: nanoid(),
      ...formData,
    };

    dispatch(addContacts(newContact));

  
    setFormData({ name: "", number: "" });


const currentState = store.getState();
console.log("Поточний стан сховища Redux:", currentState);

  };

  return (
    <FormContacts onSubmit={handleSubmit}>
      <LabelContacts>
        <span>Name</span>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={formData.name}
          onChange={handleInputChange}
        />
      </LabelContacts>
      <LabelContacts>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={formData.number}
          onChange={handleInputChange}
          required
        />
      </LabelContacts>
      <FormButton type="submit">Add contact</FormButton>
    </FormContacts>
  );
};
