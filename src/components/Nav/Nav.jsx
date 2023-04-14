import style from "./Nav.module.css";
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = ({ onSearch, logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={style.nav}>
      <div className={style.btns}>
        <button className={style.dropdownBtn} onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>
      <div className={`${style.dropdownContent} ${isOpen ? style.show : ''}`}>
        <Link to='/about'> ABOUT </Link>
        <Link to='/home'> HOME </Link>
        <Link to='/favorites'> FAVORITES </Link>
      </div>
      <SearchBar onSearch={onSearch} />
      <button className={style.btn} onClick={logout}>LOG OUT</button>
    </nav>
  )
}

export default Nav;
