import PropTypes from 'prop-types';
import css from "./ContactList.module.css";

export default function ContactList({ contacts, removeContact }) {
    return (
        <ul className={css.list}>
            {contacts.map(({ id, name, number }) => (
                <li className = {css.item} key={id}>
                                        <button
                        className={css.button}
                        type="button"
                        onClick={() => removeContact(id)}
                    >-
                    </button>
                    <p>
                        {name}: {number}
                    </p>
                </li>
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    removeContact: PropTypes.func.isRequired,
};
