import React, { useState } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import './styles.css';
import { Contact } from '../../types/Contacts';

interface ModalAddContactProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    onSave: (contact: Contact) => void;
}

const ModalAddContact: React.FC<ModalAddContactProps> = ({ open, setOpen, onSave }) => {
    const [formInputs, setFormInputs] = useState({
        id: Date.now(),
        name: '',
        email: '',
        phone: ''
    });

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        setFormInputs(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formInputs.name && formInputs.email && formInputs.phone) {
            onSave(formInputs);
            setOpen(false);
        }
    };

    return (
    <div className="backdrop" style={{ display: open ? 'flex' : 'none' }}>
        <form onSubmit={handleSubmit} className="container-modal-add">
        <img
            src={CloseIcon}
            alt="Close Icon"
            className="close-icon"
            onClick={() => setOpen(false)}
        />
        <h2>Novo Contato</h2>

        <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formInputs.name}
            onChange={handleChange}
        />
        <input
            type="text"
            name="email"
            placeholder="Email"
            value={formInputs.email}
            onChange={handleChange}
        />
        <input
            type="text"
            name="phone"
            placeholder="Telefone"
            value={formInputs.phone}
            onChange={handleChange}
        />

        <div className="buttons-confirm">
            <button type="submit" className="btn btn-positive btn-confirm-add">ADICIONAR</button>
            <button type="button" onClick={() => setOpen(false)} className="btn btn-negative btn-cancel-add">CANCELAR</button>
        </div>
    </form>
    </div>
);
};

export default ModalAddContact;
