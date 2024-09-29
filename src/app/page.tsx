import { HighlightsFeedForm } from '@/components/highlights/HighlightsFeedForm/HighlightsFeedForm';
import { HighlightsFeedFormProvider } from '@/providers';
import styles from '@/styles/pages/home.module.scss';

export default function Home(): React.JSX.Element {
  return (
    <section className={styles.home__container}>
      <HighlightsFeedFormProvider>
        <HighlightsFeedForm />
      </HighlightsFeedFormProvider>
    </section>
  );
}
