import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MODAL } from '../../actions/constants';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import './ModalContainer.scss';

const ModalContainer = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.Modal.modal);
  const results = useSelector(state => state.Results.searchResults);
  const content = <pre>${JSON.stringify(results, null, '  ')}</pre>;

  if (modal.isVisible === false) {
    return null;
  }

  const closeModal = () => {
    dispatch({ type: MODAL.HIDE_MODAL });
  };

  return <Modal onClick={closeModal} content={modal.isLoading ? <Loader /> : content} />;
};

export default ModalContainer;
