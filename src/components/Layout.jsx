import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import DropdownInterview from './DropdownInterview/DropdownInterview';
import css from './Layout.module.css';

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

        <div className={css.secondMenu}>
          <nav className={css.leftMenu}>
            <NavLink to="/phonetics" className={css.leftMenu_phonetics}>
              Phonetics
            </NavLink>
          </nav>

          <nav className={css.rightMenu}>
            <ul>
              <li>
                <NavLink
                  to="phrasal-verbs"
                  className={css.rightMenu_phrasalVerbs}
                >
                  Phrasal Verbs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="collocations"
                  className={css.rightMenu_collocations}
                >
                  Collocations
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
