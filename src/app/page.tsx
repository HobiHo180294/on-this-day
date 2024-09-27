import { HighlightsFeedForm } from '@/components/highlights/HighlightsFeedForm/HighlightsFeedForm';
import { HighlightsFeedFormProvider } from '@/providers';

export default function Home(): React.JSX.Element {
  return (
    <HighlightsFeedFormProvider>
      <HighlightsFeedForm />
    </HighlightsFeedFormProvider>
  );
}
