import React from 'react';
import { listMenu } from '../../utils/listMenu';
import './NavBar.scss';

export const NavBar = () => {
  const { items } = listMenu;

  return (
    <nav>
      <ul className='navbar'>
        {items.map((item) => (
          <li className='navbar__item' key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};
