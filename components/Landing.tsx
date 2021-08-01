import AngledCorner from 'components/AngledCorner';

import styles from 'styles/Landing.module.css';

const Landing = (): JSX.Element => (
  <div className={styles.main}>
    <div className={styles.leftpad} />
    <AngledCorner width={60} height={60} right>
      <h1 className={styles.title}>Landing</h1>
    </AngledCorner>
    <div className={styles.rightpad} />
  </div>
);

export default Landing;
