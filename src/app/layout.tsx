import { ReactQueryProvider } from '@/providers';
import { LayoutProps } from '@/shared/types/globals';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Gowun_Batang } from 'next/font/google';

const gowunBatang = Gowun_Batang({
  subsets: ['latin'],
  weight: ['400', '700'],
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
      <body className={gowunBatang.className}>
        <div id="root">
          <ReactQueryProvider>
            <main id="main">{children}</main>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
