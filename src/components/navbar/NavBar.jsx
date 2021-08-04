import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { listMenu } from '../../utils/listMenu';
import './NavBar.scss';

export const NavBar = () => {
  const { items } = listMenu;
  const [acitvateMenu, setAcitvateMenu] = useState(false);

  const handleClick = () => {
    setAcitvateMenu(!acitvateMenu);
  };
  return (
    <nav>
      <button
        type='button'
        aria-label='Boton de menú'
        className='btn__menu'
        onClick={handleClick}
      >
        <i className='fas fa-bars hamburger'></i>
      </button>

      <ul className={acitvateMenu ? 'navbar active' : 'navbar'}>
        {items.map((item) => (
          <li className='navbar__list' key={item.id}>
            <Link className='navbar__list--item' to={`/${item.name}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
