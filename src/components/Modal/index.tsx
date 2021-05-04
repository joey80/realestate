import React from 'react';
import './styles.scss';

const Modal = ({
  children,
  onClick = () => {},
}: React.PropsWithChildren<{ onClick?: () => void }>) => (
  <div className='modal'>
    <div className='modal__footer'>
      <button onClick={onClick} type='button'>
        Close
      </button>
    </div>
    {children}
  </div>
);

export default Modal;
