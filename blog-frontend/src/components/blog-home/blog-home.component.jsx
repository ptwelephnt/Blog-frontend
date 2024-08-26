import { useReducer } from 'react';
import Filter from '../filter/filter.component';
import { initialState, filterReducer } from '../../reducers/filter.reducer';
import './blog-home.styles.scss';

const BlogHome = () => {
    const [state, dispatch] = useReducer(filterReducer, initialState);
    return (
        <div>
            <Filter state={state} dispatch={dispatch} />
        </div>
    )
};

export default BlogHome;