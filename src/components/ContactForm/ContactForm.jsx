import { FormButton, FormContacts, LabelContacts } from "./ContactForm.styled"
import { useDispatch } from "react-redux";
import { addContacts} from "redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector((state) =>  state.contacts.contacts) || [];
   const handleNameSet = e => {
    e.preventDefault();
      const { name, number } = e.currentTarget.elements;
     const newContact = { name: name.value, number: number.value, };
     
  console.log(contacts)

  const isExistingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
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
          />
        </LabelContacts>
        <LabelContacts>
          <span>Number</span>
          <input
        type="tel"
        name="number"
                />
        </LabelContacts>
       <FormButton type="submit">Add contact</FormButton>
      </FormContacts>
}