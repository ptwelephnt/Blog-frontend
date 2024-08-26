export const initialState = {
    title: '',
    body: '',
    selectedCategories: [],
    selectedSeries: [],
}

export function filterReducer(state, action) {
    const removeItem = (array, item) => {
        return array.filter((arrayItem) => arrayItem !== item)
    }
    switch (action.type) {
        case 'SET_TITLE_FILTER':
            return { ...state, title: action.payload };
        case 'SET_BODY_FILTER':
            return { ...state, body: action.payload };
        case 'ADD_CATEGORY_FILTER':
            return { ...state, selectedCategories: [...state.selectedCategories, action.payload] };
        case 'REMOVE_CATEGORY_FILTER':
            return { ...state, selectedCategories: removeItem(state.selectedCategories, action.payload) };
        case 'ADD_SERIES_FILTER':
            return { ...state, selectedSeries: action.payload };
        case 'REMOVE_SERIES_FILTER':
            return { ...state, selectedSeries: removeItem(state.selectedSeries, action.payload) };
        case 'CLEAR_FILTERS':
            return initialState;
    }
}