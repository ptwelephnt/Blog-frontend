export const initialState = {
    title: {
        text: '',
        type: 'Contains'
    },
    content: {
        text: '',
        type: 'Contains'
    },
    selectedCategories: [],
    selectedSeries: [],
}

export const FILTER_ACTIONS = {
    SET_TITLE_FILTER_TEXT: 'SET_TITLE_FILTER_TEXT',
    SET_TITLE_FILTER_TYPE: 'SET_TITLE_FILTER_TYPE',
    SET_CONTENT_FILTER_TEXT: 'SET_CONTENT_FILTER_TEXT',
    SET_CONTENT_FILTER_TYPE: 'SET_CONTENT_FILTER_TYPE',
    ADD_CATEGORY_FILTER: 'ADD_CATEGORY_FILTER',
    REMOVE_CATEGORY_FILTER: 'REMOVE_CATEGORY_FILTER',
    ADD_SERIES_FILTER: 'ADD_SERIES_FILTER',
    REMOVE_SERIES_FILTER: 'REMOVE_SERIES_FILTER',
    CLEAR_FILTERS: 'CLEAR_FILTERS'
}

export function filterReducer(state, action) {

    const removeItem = (array, item) => {
        return array.filter((arrayItem) => arrayItem !== item)
    }

    switch (action.type) {
        case FILTER_ACTIONS.SET_TITLE_FILTER_TEXT:
            return { ...state, title: { ...state.title, text: action.payload } };
        case FILTER_ACTIONS.SET_TITLE_FILTER_TYPE:
            return { ...state, title: { ...state.title, type: action.payload } };
        case FILTER_ACTIONS.SET_CONTENT_FILTER_TEXT:
            return { ...state, content: { ...state.content, text: action.payload } };
        case FILTER_ACTIONS.SET_CONTENT_FILTER_TYPE:
            return { ...state, content: { ...state.content, type: action.payload } };
        case FILTER_ACTIONS.ADD_CATEGORY_FILTER:
            return { ...state, selectedCategories: [...state.selectedCategories, action.payload] };
        case FILTER_ACTIONS.REMOVE_CATEGORY_FILTER:
            return { ...state, selectedCategories: removeItem(state.selectedCategories, action.payload) };
        case FILTER_ACTIONS.ADD_SERIES_FILTER:
            return { ...state, selectedSeries: [...state.selectedSeries, action.payload] };
        case FILTER_ACTIONS.REMOVE_SERIES_FILTER:
            return { ...state, selectedSeries: removeItem(state.selectedSeries, action.payload) };
        case FILTER_ACTIONS.CLEAR_FILTERS:
            return initialState;
    }
}