import PropTypes from 'prop-types';
import './blog-entry.styles.scss';

const BlogEntry = ({ entry, showEntry }) => {
    return (
        <div className={`blog-entry ${showEntry ? 'full-Size' : 'preview'}`}>
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
        </div>
    )
}

BlogEntry.propTypes = {
    entry: PropTypes.object,
    showEntry: PropTypes.bool,
}

export default BlogEntry;