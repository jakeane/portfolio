import styles from 'styles/NavBar.module.css';

interface Props {
  name: string
  scrollTo: (s: string) => void
  current?: boolean
}

const NavItem: React.FC<Props> = (props) => (
  <div
    className={`${styles.container} ${props.current ? styles.current_container : ''}`}
    onClick={() => props.scrollTo(props.name)}
  >
    <p className={styles.name}>{props.name.toUpperCase()}</p>
    <div className={`${styles.box} ${props.current ? styles.current_box : ''}`} />
  </div>
);

export default NavItem;
