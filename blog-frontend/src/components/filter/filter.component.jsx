import PropTypes from 'prop-types';
import FilterCheckbox from './filter-checkbox/filter-checkbox.component';
import FilterTextbox from './filter-textbox/filter-textbox.component';
import { FILTER_ACTIONS } from '../../reducers/filter.reducer';
import './filter.styles.scss';

const Filter = ({ state, dispatch }) => {
    const categories = ['red', 'blue', 'green']
    const series = ['one', 'two', 'three']
    const radioOptions = ['Contains', 'Excludes'];

    const handleTitleChange = (e) => {
        if (e.target.type === 'radio') {
            dispatch({ type: FILTER_ACTIONS.SET_TITLE_FILTER_TYPE, payload: e.target.value})
        } else if (e.target.type === 'text') {
            dispatch({ type: FILTER_ACTIONS.SET_TITLE_FILTER_TEXT, payload: e.target.value})
        }
    }

    const handleContentChange = (e) => {
        if (e.target.type === 'radio') {
            dispatch({ type: FILTER_ACTIONS.SET_CONTENT_FILTER_TYPE, payload: e.target.value})
        } else if (e.target.type === 'text') {
            dispatch({ type: FILTER_ACTIONS.SET_CONTENT_FILTER_TEXT, payload: e.target.value})
        }
    }

    const handleCategoryChange = (e) => {
        if (!state.selectedCategories.includes(e.target.value)) {
            dispatch({ type: 'ADD_CATEGORY_FILTER', payload: e.target.value })
        } else {
            dispatch({ type: 'REMOVE_CATEGORY_FILTER', payload: e.target.value })
        }
    }

    const handleSeriesChange = (e) => {
        if (!state.selectedSeries.includes(e.target.value)) {
            dispatch({ type: 'ADD_SERIES_FILTER', payload: e.target.value })
        } else {
            dispatch({ type: 'REMOVE_SERIES_FILTER', payload: e.target.value })
        }
    }

    return (
        <div className='filter'> 
            <h2>Filter</h2>
            <div className='textbox-container'>
                <FilterTextbox filterBy='title' radioOptions={radioOptions} state={state.title} handleChange={handleTitleChange} />
                <FilterTextbox filterBy='content' radioOptions={radioOptions} state={state.content} handleChange={handleContentChange} />
            </div>
            <FilterCheckbox header='Category' options={categories} state={state.selectedCategories} handleChange={handleCategoryChange} />
            <FilterCheckbox header='Series' options={series} state={state.selectedSeries} handleChange={handleSeriesChange} />
        </div>
    )
};

Filter.propTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func,
}

export default Filter;