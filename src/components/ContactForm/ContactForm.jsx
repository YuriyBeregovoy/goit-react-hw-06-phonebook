import { FormButton, FormContacts, LabelContacts } from "./ContactForm.styled"
import { useDispatch } from "react-redux";
import { addContacts } from "redux/contactsSlice";
// import { nanoid } from 'nanoid'
import { nanoid } from "@reduxjs/toolkit";


export const ContactForm = () => {

  const dispatch = useDispatch();

   const handleNameSet = e => {
    e.preventDefault();
     const form = e.target;
     const name = form.elements.name.value;
     const number = form.elements.number.value;
    dispatch(addContacts({ name, number }));
    form.reset();
      }
  

  return  <FormContacts onSubmit={handleNameSet}>
      <LabelContacts htmlFor={nanoid()}>
          <span>Name</span>
          <input
   
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
       
          />
        </LabelContacts>
        <LabelContacts>
          <span>Number</span>
          <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
                />
        </LabelContacts>
       <FormButton type="submit">Add contact</FormButton>
      </FormContacts>
}