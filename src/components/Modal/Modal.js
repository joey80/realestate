import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
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

    if (modal.isLoading === true) {
        content = 'Loading';
    } else {
        content = <pre>${JSON.stringify(results, null, '  ')}</pre>;
    }
        
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