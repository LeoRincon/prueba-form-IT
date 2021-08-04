import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from '../../components/modal';
import './Form.scss';

export const Form = ({ name }) => {
  const [error, setError] = useState(false);
  const [lightbox, setLightbox] = useState(false);
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
        />
        <label>Email*</label>
        <input
          value={state.email}
          type='email'
          name='email'
          onChange={actualizarState}
          placeholder='example@example.com'
        />
        <label>Celular*</label>
        <input
          value={state.celular}
          type='number'
          name='celular'
          onChange={actualizarState}
          placeholder='+57 43434343'
        />
        <label>Edad*</label>
        <select type='text' name='edad' onChange={actualizarState}>
          <option value='18 a 40'>18 a 40</option>
          <option value='41 a 60'>41 a 60</option>
          <option value='61 a 100'>61 a 100</option>
        </select>
        <button onClick={handleClick}>Agregar</button>
      </form>
      {ReactDOM.createPortal(
        lightbox && <Modal />,
        document.getElementById('modal')
      )}
    </main>
  );
};
