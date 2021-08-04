import React from 'react';
import './Header.scss';
import { NavBar } from '../navbar';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__logotipo'>
        <h1>Logo</h1>
      </div>
      <NavBar />
    </header>
  );
};
