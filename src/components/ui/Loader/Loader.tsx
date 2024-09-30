import styles from './Loader.module.scss';

export const Loader = (): React.JSX.Element => (
  <div data-testid="loader" className={styles.loader} />
);
