import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },];


const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,

  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({name, number}) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      }
    },
    deleteContacts(state, action) {
       const index = state.findIndex(contact => contact.id === action.payload);
        if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updateContact(state, action) {
      const updatedContact = action.payload;
      const currentContact = state.findIndex(
        contact => contact.id === updatedContact.id
      );

      if (currentContact !== -1) {
        state.items[currentContact] = updatedContact;
      }
    },

  }
});
export const contactsReducer = contactsSlice.reducer;
export const { addContacts, deleteContacts, updateContact } = contactsSlice.actions;
export const updatePhonebook = state => state.contacts;