import PropTypes from 'prop-types';
import css from "./Filter.module.css";

export default function Filter({ value, onChange }) {
    return (
        <label className={css.label}>
            Find contacts by name:
            <input
                className={css.input}
                type="text"
                value={value}
                onChange={onChange}
                title="type serched name or surname"
            />
        </label>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};