import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {

    render() {
        if(!this.props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal__footer">
                <button onClick={this.props.onClose}>
                    Close
                </button>
            </div>
            {this.props.children}
        </div>
    );
  }
}

export default Modal;