import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { getDictionary } from '@/locale/getDictionaries';
import { Locale } from '@/locale/i18n-config';

interface PageParams {
  params: { lang: Locale };
}

const NotFound: React.FC<PageParams> = async ({ params }) => {
  const dict = await getDictionary(params.lang);
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href={`/${dict}/dashboard/invoices`}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
};

export default NotFound;
