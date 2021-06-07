import React, { Children } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const ModalOverlay = ({ className, style, headerClass, header, onSubmit, contentClass, children, footerClass }) => {
  const content = (
    <div className={`modal ${className}`} style={style}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : event => event.preventDefault()}>
        <div className={`modal__content ${contentClass}`}>
          {children}
        </div>
        <footer className={`modal__footer ${footerClass}`}>
          
        </footer>
      </form>
    </div>
  )
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

const Modal = () => {
  return (
    <div>

    </div>
  )
}

export default Modal;
