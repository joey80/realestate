import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MODAL } from 'src/actions/constants';
import Loader from 'src/components/Loader/Loader';
import Modal from 'src/components/Modal/Modal';
import { RootState } from 'src/reducers/index';
import './ModalContainer.scss';

const ModalContainer = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.Modal.modal);
  const results = useSelector((state: RootState) => state.Results.searchResults);
  const content = <pre>${JSON.stringify(results, null, '  ')}</pre>;

  if (modal.isVisible === false) {
    return null;
  }

  const closeModal = () => {
    dispatch({ type: MODAL.HIDE_MODAL });
  };

  return <Modal onClick={closeModal}>{modal.isLoading ? <Loader /> : content}</Modal>;
};

export default ModalContainer;
