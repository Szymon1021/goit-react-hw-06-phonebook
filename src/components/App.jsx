import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { MyForm } from './MyForm/MyForm';
import { Filter } from './Filter/Filter';
export const App = () => {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <MyForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
