import PropTypes from 'prop-types';
import './filter-checkbox.styles.scss';

const FilterCheckbox = ({ header, options, state, handleChange }) => {
    return (
        <div className='filter-checkbox'>
            <h3>{header}</h3>
            <div className='checkbox-container'>
                {options.map((option) => (
                    <div key={option} className='option'>
                        <input
                            type='checkbox'
                            id={option}
                            name={option}
                            value={option}
                            checked={state.includes(option)}
                            onChange={handleChange}
                        />
                        <label>{option.charAt(0).toUpperCase() + option.slice(1)}</label>
                    </div>
                ))}
            </div>
        </div>
    )
};

FilterCheckbox.propTypes =  {
    header: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    state: PropTypes.array,
    handleChange: PropTypes.func,
}

export default FilterCheckbox;