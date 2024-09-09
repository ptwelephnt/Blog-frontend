import PropTypes from 'prop-types';
import './filter-textbox.styles.scss';

const FilterTextbox = ({ filterBy, radioOptions, state, handleChange }) => {
    return (
        <div className='filter-textbox'>
            <div>
                <input
                    type='text'
                    value={state.text}
                    onChange={handleChange}
                    placeholder={`Filter by ${filterBy}...`}
                />
            </div>
            <div className='radio-container'>
                {radioOptions.map((option) => (
                        <label key={option}>
                            <input
                                type='radio'
                                value={option}
                                checked={state.type === option}
                                onChange={handleChange}
                            />
                            {option}
                        </label>                          
                ))}
            </div>
        </div>
    )
};

FilterTextbox.propTypes = {
    filterBy: PropTypes.string,
    radioOptions: PropTypes.arrayOf(PropTypes.string),
    state: PropTypes.object,
    handleChange: PropTypes.func,
}

export default FilterTextbox;