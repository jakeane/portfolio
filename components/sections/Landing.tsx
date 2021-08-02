import AngledCorner from 'components/utils/AngledCorner';

import styles from 'styles/Landing.module.css';

const Landing = (): JSX.Element => (
  <div className={styles.main} id='Home'>
    <div className={styles.leftpad} />
    <AngledCorner width={60} height={60} right>
      <h1 className={styles.name}>John Keane</h1>
      <p className={styles.subname}>(You can call me Jack)</p>
      <h2 className={styles.declaration}>Seeking full-time software engineering roles</h2>
      <div className={styles.arrow}/>
    </AngledCorner>
    <div className={styles.rightpad} />
  </div>
);

export default Landing;
