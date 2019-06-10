import React from 'react';
import { connect } from 'react-redux';
import './Modal.scss';

const mapStateToProps = state => {
    return {
        modal: state.Modal.modal
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch({type: "HIDE_MODAL"})
    }
};

const closeModal = props => {
    props.hideModal();
};

const Modal = props => {
    if (props.show === false) {
        return null;
    } else {
        return (
            <div className="modal">
                <div className="modal__footer">
                    <button onClick={() => {closeModal(props)}}>
                        Close
                    </button>
                </div>
                {props.children}
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);