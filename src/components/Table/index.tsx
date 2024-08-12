import { useState } from 'react';
import DeleteIcon from '../../assets/delete-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import './styles.css';
import ModalConfirmDelete from '../ModalConfirmDelete';
import ModalConfirmEdit from '../ModalConfirmEdit'
import { Contact } from '../../types/Contacts';
import ModalAddContact from '../ModalAddContact';

interface TableProps {
  contacts: Contact[];
}

function Table({ contacts }: TableProps) {

  const contactsVazio = {
    id: 0,
    name: '',
    email: '',
    phone: ''
  
  }

  
  const [currentContact, setCurrentContact] = useState<Contact>(contactsVazio)
  const [allContacts, setAllContacts] = useState<Contact[]>(contacts)
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAddContact, setOpenAddContact] = useState<boolean>(false);

  function handleEditContact(item: Contact) {
    setCurrentContact(item);
    setOpenEdit(true);
  
  }

  function handleDelete(id: number) {
    setAllContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  }

  function handleDeleteContact(item: Contact) {
    setCurrentContact(item)
    setOpen(true);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleSaveContact(updatedContact: Contact) {
    setAllContacts(prevContacts => prevContacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    ));
    setOpenEdit(false); 
  }

  function handleAddContact(contact: Contact) {
    setAllContacts(prevContacts => [...prevContacts, contact]);
    setOpenAddContact(false); 
  }

  return (
    <div className="container-table">
      <div className="header-table">
        <strong>Nome</strong>
        <strong>Email</strong>
        <strong>Telefone</strong>
      </div>
      <div className="body-table">
        {allContacts.map(item => (
          <div className="line-table" key={item.id}>
            <span>{item.name}</span>
            <span>{item.email}</span>
            <span>{item.phone}</span>
            <div className="action-buttons">
              <img
                src={EditIcon}
                alt="Edit Icon"
                onClick={() => handleEditContact(item)}
              />
              <img
                src={DeleteIcon}
                alt="Delete Icon"
                onClick={() => handleDeleteContact(item)}
              />
            </div>
          </div>
        ))
        }
      </div >
      <ModalConfirmDelete
        open={open}
        setOpen={setOpen}
        itemToDelete={currentContact}
        onDelete={handleDelete}
      />
      <ModalConfirmEdit
        open={openEdit}
        setOpen={setOpenEdit}
        itemToEdit={currentContact}
        onSave={handleSaveContact}
      />
      <ModalAddContact
        open={openAddContact}
        setOpen={setOpenAddContact}
        onSave={handleAddContact}
      />
    </div >
  );
}

export default Table;