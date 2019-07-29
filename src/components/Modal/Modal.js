import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Modal.scss';

const mapStateToProps = state => ({
    modal: state.modalReducer.modal,
    results: state.Results.searchResults
});
  
const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch({type: "HIDE_MODAL"})
});

const Modal = props => {
    let content;

    const closeModal = () => {
        props.hideModal();
    };

    if (props.modal.isVisible === false) {
        return null;
    }

    if (props.modal.isLoading === true) {
        content = 'Loading';
    } else {
        content = <pre>${JSON.stringify(props.results, null, '  ')}</pre>;
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
    hideModal: PropTypes.func,
    modal: PropTypes.object,
    results: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);