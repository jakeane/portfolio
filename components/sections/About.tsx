import styles from 'styles/About.module.css';
import AngledCorner from '../utils/AngledCorner';

const About = (): JSX.Element => (
  <div className={styles.main}>
    <AngledCorner right width={55} height={60} >
      <div>hi</div>
    </AngledCorner>
  </div>
);

export default About;
