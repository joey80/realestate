import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
>>>>>>> 3f26f9d2062b5e032d00c2b0ea239a4e9245eeeb
import Loader from '../Loader/Loader';
import './Modal.scss';

const Modal = () => {

    const dispatch = useDispatch();
    const modal = useSelector(state => state.modalReducer.modal);
    const results = useSelector(state => state.Results.searchResults);
    let content;

    const closeModal = () => {
        dispatch({ type: 'HIDE_MODAL' });
    };

    if (modal.isVisible === false) {
        return null;
    }

<<<<<<< HEAD
        if (props.modal.isLoading === true) {
            content = <Loader />;
        } else {
            content = <pre>${JSON.stringify(props.results, null, '  ')}</pre>;
        }
=======
    if (modal.isLoading === true) {
        content = <Loader />;
    } else {
        content = <pre>${JSON.stringify(results, null, '  ')}</pre>;
    }
>>>>>>> 3f26f9d2062b5e032d00c2b0ea239a4e9245eeeb
        
    return (
        <div className="modal">
            <div className="modal__footer">
                <button
                    onClick={ closeModal }
                    type="button">
                    Close
                </button>
            </div>
            {content}
        </div>
    );
};

Modal.propTypes = {
    modal: PropTypes.object,
    results: PropTypes.object
};

export default Modal;