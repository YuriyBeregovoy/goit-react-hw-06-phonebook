import { createSlice, nanoid } from "@reduxjs/toolkit";



const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },

  reducers: {
    addContacts: {
      reducer(state, action) {
        state.items.push(action.payload);
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
       const index = state.items.filter(item => item.id !== action.payload);
        if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    updateContact(state, action) {
      const updatedContact = action.payload;
      const currentContact = state.items.findIndex(
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
export const updatePhonebook = state => state.contacts.items;