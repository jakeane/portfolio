import styles from 'styles/AngledCorner.module.css';

interface Props {
  // width: number
  styling: string
  // height?: number
  right?: boolean
}

const AngledCorner: React.FC<Props> = (props) => (
  <div className={`${styles.box} ${props.right ? styles.right : styles.left} ${props.styling}`}>
    {props.children}
  </div>
);

export default AngledCorner;
