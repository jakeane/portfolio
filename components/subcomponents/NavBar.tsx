import styles from 'styles/NavBar.module.css';
import NavItem from './NavItem';

interface Props {
  scrollTo: (s: string) => void
  closestSection: number
}

const SECTIONS = ['Home', 'Experience', 'Projects', 'About', 'Links'];

const NavBar: React.FC<Props> = (props) => (
  <nav className={styles.nav}>
    {SECTIONS.map((s, i) => (
      <NavItem
        name={s}
        key={s}
        scrollTo={props.scrollTo}
        current={i === props.closestSection}
      />
    ))}
  </nav>
);

export default NavBar;
