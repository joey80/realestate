import React from 'react';
import './Modal.scss';

const Modal = props => (

    <div className="modal">
        <div className="modal__footer">
            <button
                onClick={ props.onClick }
                type="button">
                Close
            </button>
        </div>
        { props.content }
    </div>
);

export default Modal;