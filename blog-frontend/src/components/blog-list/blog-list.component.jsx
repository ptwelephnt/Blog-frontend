import { useState } from 'react';
import PropTypes from 'prop-types';
import './blog-list.styles.scss';
import BlogEntry from '../blog-entry/blog-entry.component';

const BlogList = ({ blogEntries }) => {
    const [numberEntries, setNumberEntries] = useState(10);
    const [entrySelected, setEntrySelected] = useState(null);

    const handleSelectEntry = (entryId) => {
        setEntrySelected(entryId);
    }

    return (
        <div className='blog-list'>
            {blogEntries.slice(0, numberEntries).map((entry) => (
                <div
                    key={entry.id}
                    onClick={() => handleSelectEntry(entry.id)}
                >
                    <BlogEntry entry={entry} showEntry={entry.id === entrySelected ? true : false} />
                </div>
            ))}
        </div>
    )
}

BlogList.propTypes = {
    blogEntries: PropTypes.array,
}

export default BlogList;