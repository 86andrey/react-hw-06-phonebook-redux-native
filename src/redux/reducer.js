import { ADD_CONTACT, REMOVE_CONTACT } from './types';

const initialStore = {
  contacts: [],
};

const reducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return { ...store, contacts: [...store.contacts, payload] };
    case REMOVE_CONTACT:
      const newContact = store.contacts.filter(({ id }) => id !== payload);
      return { ...store, contacts: newContact };
    default:
      return store;
  }
};
export default reducer;
