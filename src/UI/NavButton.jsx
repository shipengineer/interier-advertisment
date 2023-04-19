import styles from './nav-button.module.css';
import { NavLink } from 'react-router-dom';
const NavButton = (props) => {
  return (
    <NavLink to={props.link} className={styles.container}>
      <img
        className={styles.icon}
        src={props.icon}
        alt={props.label.toLowerCase()}
      />
      <p>{props.label}</p>
    </NavLink>
  );
};

export default NavButton;
