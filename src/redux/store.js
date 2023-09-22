import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from "./contactsSlice"
import {filterReducer} from "./filterSlice"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'localforage';

const persistConfig = {
key: 'root',
 storage,
};

const rootReducer = {
  filter: filterReducer,
  contacts: contactsReducer,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, 
});

export const persistor = persistStore(store);