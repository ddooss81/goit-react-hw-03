import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import './App.css';

export default function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    //localStorage або використати початкові контакти
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    return storedContacts || initialContacts;
  });

  // Збереження контактів у localStorage при їх зміні
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //Додавання контакту
  const addContact = (newContact) => {
    setContacts((currentContacts) => [...currentContacts, newContact]);
  };

  // Фільтрація контактів
  const [filter, setFilter] = useState('');

  // Відфільтровані контакти
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Видалення контакту
  const deleteContact = (contactId) => {
    setContacts((currentContacts) =>
      currentContacts.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
