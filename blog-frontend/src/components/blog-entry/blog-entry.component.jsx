import PropTypes from 'prop-types';
import './blog-entry.styles.scss';

const BlogEntry = ({ entry, showEntry, even }) => {
    return (
        <div className={`blog-entry ${showEntry ? 'full-size' : 'preview'} ${even ? 'even' : 'odd'}`}>
            <h3>{entry.title}</h3>
            <p>{entry.date}</p>
            <p>{entry.content}</p>
        </div>
    )
}

BlogEntry.propTypes = {
    entry: PropTypes.object,
    showEntry: PropTypes.bool,
    even: PropTypes.bool,
}

export default BlogEntry;