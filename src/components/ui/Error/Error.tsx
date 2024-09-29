import { Message } from '@/shared/types/globals';
import styles from './Error.module.scss';

export const Error = ({ message }: Message): React.JSX.Element => (
  <h4 className={styles.error}>{message}</h4>
);
