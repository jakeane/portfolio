import styles from 'styles/AngledCorner.module.css';

interface Props {
  width: number
  height: number
  right?: boolean
  children: JSX.Element | JSX.Element[]
}

const AngledCorner = (props: Props): JSX.Element => (
  <div
    className={`${styles.box} ${props.right ? styles.right : styles.left}`}
    style={{ width: `${props.width}vw`, height: `${props.height}vh` }}
  >
    {props.children}
  </div>
);

export default AngledCorner;
