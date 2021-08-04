import React from 'react';
import './Modal.scss';

export const Modal = () => {
  return (
    <div className='container-modal'>
      <div className='container-modal__modal'>
        <div className='container-modal__description'>
          <i className='far fa-check-circle'></i>
          <p>
            Tu información fue enviada con éxito, estaremos en contacto contigo.
          </p>
        </div>
      </div>
    </div>
  );
};
