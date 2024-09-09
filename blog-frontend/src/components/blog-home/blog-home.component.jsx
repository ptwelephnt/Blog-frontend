import { useReducer } from 'react';
import Filter from '../filter/filter.component';
import BlogList from '../blog-list/blog-list.component';
import { initialState, filterReducer } from '../../reducers/filter.reducer';
import './blog-home.styles.scss';

import MOCK_DATA from '../../../mock data/MOCK_DATA.json';

const BlogHome = () => {
    const [filterState, dispatch] = useReducer(filterReducer, initialState);
    const filterOn = false;
    return (
        <div className='blog-home'>
            <BlogList blogEntries={MOCK_DATA} />
            {filterOn && <Filter state={filterState} dispatch={dispatch} />}
        </div>
    )
};

export default BlogHome;