import styles from 'styles/Experience.module.css';
import AngledCorner from './AngledCorner';

const Experience = (): JSX.Element => (
  <div className={styles.main}>
    <AngledCorner width={60} height={100}>
      <div>hi</div>
    </AngledCorner>
  </div>
);

export default Experience;
