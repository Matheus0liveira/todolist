import React from 'react';
import { BsBook } from 'react-icons/bs'
import './styles.css';

function Header() {
  return (
    <header >
      <BsBook className='icon-book' />
      <h1>Todo List</h1>
    </header>
  );

}

export default Header;