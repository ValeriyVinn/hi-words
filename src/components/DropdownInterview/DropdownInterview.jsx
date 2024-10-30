import { NavLink } from 'react-router-dom';

import css from './DropdownInterview.module.css'


const DropdownInterview = () => {
  return (
    <div className={css.dropdownMenu}>
      <ul className={css.dropdownMenu_List}>
        <li className={css.dropdownMenu_item}>
          <NavLink to='interview-markup'>Html-css interview</NavLink>
        </li>
        <li className={css.dropdownMenu_item}>
          <NavLink to='interview-java-script'>Java Script interview</NavLink>
        </li>
        <li className={css.dropdownMenu_item}>
          <NavLink to='interview-react'>React interview</NavLink>
        </li>
        <li className={css.dropdownMenu_item}>
          <NavLink to='interview-node'>Node interview</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DropdownInterview;