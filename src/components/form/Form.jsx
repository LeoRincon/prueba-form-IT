import React, { useState } from 'react';
import './Form.scss';

export const Form = ({ name }) => {
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
  console.log(state);

  return (
    <main>
      <form className='form'>
        <p className='form--title'>
          Hola, bienvenido, sabemos que quieres viajar en un {name}
        </p>
        <label>Nombre Completo</label>
        <input
          type='text'
          name='nombre'
          onChange={actualizarState}
          placeholder='Nombre Completo'
        />
        <label>Email</label>
        <input type='email' />
        <label>Celular</label>
        <input type='number' />
        <label>Edad</label>
        <select type='text'>
          <option value='1'>18 a 40</option>
          <option value='2'>41 a 60</option>
          <option value='3'>61 a 100</option>
        </select>
      </form>
    </main>
  );
};
