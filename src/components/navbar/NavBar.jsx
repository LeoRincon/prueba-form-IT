import React from 'react';
import { Link } from 'react-router-dom';
import { listMenu } from '../../utils/listMenu';
import './NavBar.scss';

export const NavBar = () => {
  const { items } = listMenu;

  return (
    <nav>
      <ul className='navbar'>
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
