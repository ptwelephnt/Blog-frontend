import './filter.styles.scss';


const Filter = ({ state, dispatch }) => {
    const categories = ['red', 'blue', 'green']

    const handleCategoryChange = (e) => {
        if (!state.selectedCategories.includes(e.target.value)) {
            dispatch({ type: 'ADD_CATEGORY_FILTER', payload: e.target.value })
        } else {
            dispatch({ type: 'REMOVE_CATEGORY_FILTER', payload: e.target.value })
        }
    }

    return (
        <div> 
            {categories.map((category) => (
                <div key={category}>
                    <input
                        type='checkbox'
                        id={category}
                        name={category}
                        value={category}
                        checked={state.selectedCategories.includes(category)}
                        onChange={handleCategoryChange}
                    />
                    <label>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                </div>
            ))}
        </div>
    )
};

export default Filter;