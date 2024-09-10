import { useState } from 'react';
import PropTypes from 'prop-types';
import './blog-list.styles.scss';
import BlogEntry from '../blog-entry/blog-entry.component';
import FullScreenPopUp from '../full-screen-pop-up/full-screen-pop-up.component';

const BlogList = ({ blogEntries }) => {
    const [numberEntries, setNumberEntries] = useState(10);
    const [entrySelected, setEntrySelected] = useState(null);

    const handleSelectEntry = (entryId) => {
        setEntrySelected(entryId);
    }

    return (
        <div className='blog-list'>
            <h1>Latest Entries</h1>
            {blogEntries.slice(0, numberEntries).map((entry, index) => (
                <div
                    key={entry.id}
                    onClick={() => handleSelectEntry(entry)}
                >
                    <BlogEntry entry={entry} showEntry={false} even={index % 2 == 0} />
                </div>
            ))}
            {entrySelected && 
                <FullScreenPopUp closeFunc={() => setEntrySelected(null)}>
                    <BlogEntry entry={entrySelected} showEntry={true} />
                </FullScreenPopUp>}
        </div>
    )
}

BlogList.propTypes = {
    blogEntries: PropTypes.array,
}

export default BlogList;