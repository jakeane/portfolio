import { Dispatch, SetStateAction } from 'react';
import styles from 'styles/NavBar.module.css';
import { SECTIONS } from 'utils/constants';
import Links from './Links';
import NavItem from './NavItem';

interface Props {
  scrollTo: (s: string) => void
  closestSection: number
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const NavBar: React.FC<Props> = (props) => (
  <nav className={styles.nav}>
    <div className={`${styles.nav_bar} ${props.open ? styles.nav_open : styles.nav_close}`}>
      {SECTIONS.map((s, i) => (
        <NavItem
          name={s}
          key={s}
          scrollTo={props.scrollTo}
          current={i === props.closestSection}
        />
      ))}
      <div className={styles.links}>
        <div className={styles.bar} />
        <Links />
      </div>
    </div>
    <div className={styles.hamburger}>
      <input
        className={styles.checkbox}
        type='checkbox'
        onClick={() => {
          document.body.style.overflow = props.open ? 'unset' : 'hidden';
          props.setOpen((o) => !o);
        }}
        checked={props.open}
        onChange={() => {}}
      />
      <span className={styles.span} />
      <span className={styles.span} />
      <span className={styles.span} />
    </div>
  </nav>
);

export default NavBar;
