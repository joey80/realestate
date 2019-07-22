import React from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';
import './Modal.scss';

const mapStateToProps = state => {
    return {
        modal: state.Modal.modal,
        results: state.Results.searchResults
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch({type: "HIDE_MODAL"})
    }
};

const Modal = props => {
    let content;

    const closeModal = () => {
        props.hideModal();
    };

    if (props.modal.isVisible === false) {
        return null;
    } else {

        if (props.modal.isLoading === true) {
            content = <Loader />;
        } else {
            content = <pre>${JSON.stringify(props.results, null, '  ')}</pre>;
        }
        
        return (
            <div className="modal">
                <div className="modal__footer">
                    <button onClick={() => {closeModal(props)}}>
                        Close
                    </button>
                </div>
                {content}
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);