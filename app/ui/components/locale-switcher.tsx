'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n, type Locale } from '@/locale/i18n-config';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className="flex gap-x-2.5">
      {i18n.locales.map((locale) => {
        return (
          <span key={locale}>
            <Link href={redirectedPathName(locale)}>{locale}</Link>
          </span>
        );
      })}
    </div>
  );
}
