import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import DropdownInterview from './DropdownInterview/DropdownInterview';
import css from './Layout.module.css';
import Timer from './Timer/Timer';
// import css from '../index.css'

const Layout = () => {
  return (
    <div>
      <header className={css.header}>
        <ul className={css.mainMenuList}>
          <li className={css.mainMenu_home}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={css.mainMenu_interview} tabIndex="0">
            Interview
            <div className={css.dropdownMenu}>
              <DropdownInterview />
            </div>
          </li>
        </ul>

        <ul className={css.secondMenu}>
          <ul className={css.leftMenu}>
            <li className={css.leftMenu_phonetics}>
              <NavLink to="/phonetics">Phonetics</NavLink>
            </li>
          </ul>

          <ul className={css.rightMenu}>
            <li className={css.rightMenu_phrasalVerbs}>
              <NavLink to="phrasal-verbs">Phrasal Verbs</NavLink>
            </li>
            <li className={css.rightMenu_collocations}>
              <NavLink to="collocations">Collocations</NavLink>
            </li>
          </ul>
        </ul>
       <Timer />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
