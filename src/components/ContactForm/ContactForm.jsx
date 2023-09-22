import { FormButton, FormContacts, LabelContacts } from "./ContactForm.styled"
import { useDispatch } from "react-redux";
import { addContacts } from "redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { store } from "redux/store"

export const ContactForm = () => {

  const dispatch = useDispatch();

   const handleNameSet = e => {
    e.preventDefault();
      const { name, number } = e.currentTarget.elements;
     const newContact = { name: name.value, number: number.value, };
     dispatch(addContacts( newContact));
     
        const currentState = store.getState();
  console.log("Поточний стан Redux-сховища:", currentState);


    e.currentTarget.reset();
      }
  

  return  <FormContacts onSubmit={handleNameSet}>
      <LabelContacts htmlFor={nanoid()}>
          <span>Name</span>
          <input
        id = {nanoid()} 
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
       
          />
        </LabelContacts>
        <LabelContacts>
          <span>Number</span>
          <input
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
                />
        </LabelContacts>
       <FormButton type="submit">Add contact</FormButton>
      </FormContacts>
}