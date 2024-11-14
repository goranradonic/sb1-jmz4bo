import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  return (
    <Link
      href={{ pathname, query }}
      as={asPath}
      locale={router.locale === 'sr' ? 'en' : 'sr'}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      {router.locale === 'sr' ? 'Switch to English' : 'Promeni na srpski'}
    </Link>
  );
}