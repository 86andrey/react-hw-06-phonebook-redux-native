import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact } from 'redux/contacts/contacts-actions';
import { getFilterContact } from 'redux/contacts/contacts-selector';
import { setFilter } from 'redux/filter/filter-actions';
import { getFilter } from 'redux/filter/filter-selector';


export default function Phonebook() {
  const contacts = useSelector(getFilterContact);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onAddContact = (payload) => {
    const action = addContact(payload);
    dispatch(action)
  };

  const onRemoveContact = (payload) => {
    dispatch(removeContact(payload))
  };

  const onSetFilter = (event) => {
    dispatch(setFilter(event.target.value))
  };

  return (
    <SectionPhonebook>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact}/>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onSetFilter} />
      <ContactList contacts={contacts} onDeleteContact={onRemoveContact} />
    </SectionPhonebook>);        
 
};

const SectionPhonebook = styled.div`
    width: 400px;
    margin: auto;
    padding: 20px;
    flex-direction: column;
    border: 2px solid darkred;
    border-radius: 10px;
    background-color: rgb(250,240,230);`;


