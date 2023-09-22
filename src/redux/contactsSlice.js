import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
    
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,

  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
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
    }

  }
});

export const contactsReducer = contactsSlice.reducer;
export const { addContacts, deleteContacts } = contactsSlice.actions;