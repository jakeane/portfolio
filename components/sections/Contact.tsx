import styles from 'styles/Contact.module.css';
import AngledCorner from '../utils/AngledCorner';

const Contact = (): JSX.Element => (
  <div className={styles.main}>
    <AngledCorner width={60} height={60}>
      <div>hi</div>
    </AngledCorner>
  </div>
);

export default Contact;
