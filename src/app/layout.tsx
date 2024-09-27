import { HighlightsFormProvider, ReactQueryProvider } from '@/providers';
import { LayoutProps } from '@/shared/types/globals';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'On This Day',
  description: "Explore Wikipedia's daily highlights",
};

export default function RootLayout({
  children,
}: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div id="root">
          <ReactQueryProvider>
            <HighlightsFormProvider>
              <main id="main">{children}</main>
            </HighlightsFormProvider>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
