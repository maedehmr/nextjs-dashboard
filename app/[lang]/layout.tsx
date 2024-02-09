import { Metadata } from 'next';

//assets
import '@/app/ui/assets/font/font.css';
import '@/app/ui/assets/global.css';

//localization
import { i18n, type Locale } from '../../locale/i18n-config';

export const metadata: Metadata = {
  title: {
    template: '%s | Invoice Dashboard',
    default: 'Invoice Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

interface PageParams {
  children: React.ReactNode;
  params: { lang: Locale };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const RootLayout: React.FC<PageParams> = ({ children, params }) => {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
