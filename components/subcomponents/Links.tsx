import Image from 'next/image';

import { EMAIL, GITHUB, LINKEDIN } from 'utils/constants';

import github from 'public/icons/github.svg';
import linkedin from 'public/icons/linkedin.svg';
import mail from 'public/icons/mail.svg';
import newTab from 'public/icons/open_in_new.svg';

import styles from 'styles/Contact.module.css';

const Links: React.FC = () => (

  <div className={styles.links}>
    <a className={styles.anchor} href={GITHUB} target='_blank' rel='noreferrer'>
      <Image src={github} alt='github' />
    </a>
    <a className={styles.anchor} href={LINKEDIN} target='_blank' rel='noreferrer'>
      <Image src={linkedin} alt='linkedin' />
    </a>
    <a className={styles.anchor} href={`mailto:${EMAIL}`}>
      <Image src={mail} alt='mail' />
    </a>
    <a href='/documents/jkeane_resume.pdf' target='_blank'>
      <div className={styles.resume}>
        <p className={styles.resume_text}>RESUME</p>
        <Image src={newTab} alt='newTab' />
      </div>
    </a>
  </div>
);

export default Links;
