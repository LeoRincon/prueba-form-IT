/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from '../../components/modal';
import './Form.scss';

export const Form = ({ name }) => {
  const [error, setError] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [isValided, setIsValided] = useState(false);
  const [state, setstate] = useState({
    nombre: '',
    email: '',
    celular: '',
    edad: '',
  });

  const actualizarState = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = () => {
    let validateNombre = /^[a-zA-Z\s]*$/;
    let validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validateNombre.test(state.nombre) && validateEmail.test(state.email)) {
      if (state.edad >= 18 && state.edad <= 100) {
        setIsValided(true);
      }
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (
      state.nombre === '' ||
      state.email === '' ||
      state.celular === '' ||
      state.edad === ''
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    validateInput();
    setLightbox(true);

    setTimeout(() => {
      setLightbox(false);
    }, 5000);
    console.log(state);

    setstate({
      nombre: '',
      email: '',
      celular: '',
      edad: '',
    });
  };
  return (
    <main>
      <form className='form'>
        {error && (
          <p className='form--message-error'>
            **debe diligenciar todos los campos**
          </p>
        )}
        <h3 className='form--title'>
          Hola, bienvenido, sabemos que quieres viajar en un {name}
        </h3>
        <label>Nombre Completo*</label>
        <input
          value={state.nombre}
          type='text'
          name='nombre'
          onChange={actualizarState}
          placeholder='Nombre Completo'
          pattern='^[a-zA-Z\s]*$'
        />
        <label>Email*</label>
        <input
          value={state.email}
          type='email'
          name='email'
          onChange={actualizarState}
          placeholder='example@example.com'
          pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
        />
        <label>Celular*</label>
        <input
          value={state.celular}
          type='number'
          name='celular'
          onChange={actualizarState}
          placeholder='+57 43434343'
          maxLength='13'
          minLength='10'
        />
        <label>Edad*</label>
        <input
          value={state.edad}
          type='number'
          name='edad'
          onChange={actualizarState}
          placeholder='Rango de edad 18 - 100'
          min='18'
          max='100'
        />
        <button onClick={handleClick}>Agregar</button>
        {isValided && <p>hola</p>}
      </form>
      {ReactDOM.createPortal(
        lightbox && <Modal />,
        document.getElementById('modal')
      )}
    </main>
  );
};
