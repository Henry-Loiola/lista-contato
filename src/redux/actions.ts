import { Contact } from "../types/Contacts";

export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const addContact = (contact: Contact) => ({
    type: ADD_CONTACT,
    payload: contact,
});

export const editContact = (contact: Contact) => ({
    type: EDIT_CONTACT,
    payload: contact,
});

export const deleteContact = (id: number) => ({
    type: DELETE_CONTACT,
    payload: id,
});
