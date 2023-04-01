import React, { useState } from "react";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
const [name, setName] = useState("");
const [number, setNumber] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, number });
        setName("");
        setNumber("");
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>
                Name
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name Surname"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я])$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={css.label}>
                Number
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="000-00-00"
                    pattern="+?\d{1,4}?[-.\s]??\d1,3??\d1,3??[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={css.button} type="submit">
                Add contact
            </button>
        </form>
    );
};

ContactForm.propTypes = {
onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;