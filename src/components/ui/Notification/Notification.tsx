import { Message } from '@/shared/types/globals';
import styles from './Notification.module.scss';

export const Notification = ({ message }: Message): React.JSX.Element => (
  <mark className={styles.notification}>{message}</mark>
);
