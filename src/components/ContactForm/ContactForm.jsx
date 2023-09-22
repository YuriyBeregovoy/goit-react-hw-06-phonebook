import { FormButton, FormContacts, LabelContacts } from "./ContactForm.styled"
import { useDispatch } from "react-redux";
import { addContacts } from "redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";





export const ContactForm = () => {

  const dispatch = useDispatch();
 const contacts = useSelector((state) => state.contacts);
   const handleNameSet = e => {
    e.preventDefault();
      const { name, number } = e.currentTarget.elements;
     const newContact = { name: name.value, number: number.value, };

     const isExistingContact = contacts.map((contact) => contact.name.toLowerCase()).includes(name.value.toLowerCase());

  if (!isExistingContact) {
    dispatch(addContacts(newContact));
  } else {
    alert(`${newContact.name} is already in contacts!`);
  }
         e.currentTarget.reset();
      }
  

  return  <FormContacts onSubmit={handleNameSet}>
      <LabelContacts htmlFor={nanoid()}>
          <span>Name</span>
          <input
        id = {nanoid()} 
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"   
        required
          />
        </LabelContacts>
        <LabelContacts>
          <span>Number</span>
          <input
        type="tel"
        name="number"
         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"        required
                />
        </LabelContacts>
       <FormButton type="submit">Add contact</FormButton>
      </FormContacts>
}