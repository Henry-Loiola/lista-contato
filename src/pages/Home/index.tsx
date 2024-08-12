import React, { useState } from 'react';
import Header from '../../components/Header';
import Table from '../../components/Table';
import './styles.css';
import ModalAddContact from '../../components/ModalAddContact';
import contactsMock from '../../dados/contactMock';
import { Contact } from '../../types/Contacts';

const Home: React.FC = () => {
  const [allContacts, setAllContacts] = useState<Contact[]>(contactsMock);
  const [openAddContactModal, setOpenAddContactModal] = useState<boolean>(false);

  const handleAddContact = (newContact: Contact) => {
    setAllContacts(prevContacts => [...prevContacts, newContact]);
    setOpenAddContactModal(false);
  };

  return (
    <div className="container-home">
      <Header />
      <div className="content-home">
        <button
          className="btn btn-positive btn-adicionar"
          onClick={() => setOpenAddContactModal(true)}>
          Adicionar
        </button>
        <Table contacts={allContacts} />
        <ModalAddContact
        open={openAddContactModal}
        setOpen={setOpenAddContactModal}
        onSave={handleAddContact}
      />
      </div>
    </div>
  );
}

export default Home;



