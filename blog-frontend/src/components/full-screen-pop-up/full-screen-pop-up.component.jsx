import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './full-screen-pop-up.styles.scss';

const FullScreenPopUp = ({ children, closeFunc }) => {
    return (
        <motion.div
            className='full-screen-pop-up'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className='close-button'>
                <p onClick={closeFunc}>Close</p>
            </div>
            {children}
        </motion.div>
    )
};

FullScreenPopUp.propTypes = {
    children: PropTypes.element,
    closeFunc: PropTypes.func,
}

export default FullScreenPopUp;