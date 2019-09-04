import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MODAL } from '../../actions/constants';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import './ModalContainer.scss';

const ModalContainer = () => {

    const dispatch = useDispatch();
    const modal = useSelector(state => state.Modal.modal);
    const results = useSelector(state => state.Results.searchResults);
    let content;

    const closeModal = () => {
        dispatch({ type: MODAL.HIDE_MODAL });
    };

    if (modal.isVisible === false) {
        return null;
    }

    if (modal.isLoading ?
        content = <Loader /> :
        content = <pre>${JSON.stringify(results, null, '  ')}</pre>
    );

    return (
        <Modal
            onClick={ closeModal }
            content={ content }
        />
    );
};

Modal.propTypes = {
    modal: PropTypes.object,
    results: PropTypes.object
};

export default ModalContainer;