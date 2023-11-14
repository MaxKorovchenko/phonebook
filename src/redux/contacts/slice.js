import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  addContact,
  deleteContact,
  editContact,
  getAllContacts,
} from './operations';

const operationsArr = [addContact, deleteContact, editContact, getAllContacts];

const transform = type => operationsArr.map(item => item[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addMatcher(isAnyOf(...transform('pending')), handlePending)
      .addMatcher(isAnyOf(...transform('rejected')), handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
