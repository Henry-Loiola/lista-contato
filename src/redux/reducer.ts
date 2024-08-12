import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from './actions';
import contactsMock from '../dados/contactMock';
import { Contact } from '../types/Contacts';

interface State {
    contacts: Contact[];
}

const initialState: State = {
    contacts: contactsMock,
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
        };
        case EDIT_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                contact.id === action.payload.id ? action.payload : contact
        ),
        };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
        };
        default:
            return state;
    }
};

export default reducer;
