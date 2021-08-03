import React from 'react';
import Image from 'next/image';

import styles from 'styles/Contact.module.css';
import AngledCorner from 'components/utils/AngledCorner';

import github from 'public/icons/github.svg';
import linkedin from 'public/icons/linkedin.svg';
import mail from 'public/icons/mail.svg';
import newTab from 'public/icons/open_in_new.svg';

const GITHUB = 'https://www.github.com/jakeane';
const LINKEDIN = 'https://www.linkedin.com/in/jack-keane-co/';

const Contact: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className={styles.main} ref={ref}>
    <AngledCorner width={60} height={60}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get in touch</h2>
        <div className={styles.links}>
          <a className={styles.anchor} href={GITHUB} target='_blank' rel='noreferrer'>
            <Image src={github} alt='github' />
          </a>
          <a className={styles.anchor} href={LINKEDIN} target='_blank' rel='noreferrer'>
            <Image src={linkedin} alt='linkedin' />
          </a>
          <a className={styles.anchor} href='mailto:john.f.keane.22@dartmouth.edu'>
            <Image src={mail} alt='mail' />
          </a>
          <a href='/jkeane_resume.pdf' target='_blank'>
            <div className={styles.resume}>
              <p className={styles.resume_text}>RESUME</p>
              <Image src={newTab} alt='newTab' />
            </div>
          </a>
        </div>
      </div>
    </AngledCorner>
  </div>
);

export default React.forwardRef(Contact);
