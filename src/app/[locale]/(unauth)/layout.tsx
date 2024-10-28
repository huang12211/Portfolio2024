import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { HomeNavButton } from '@/components/HomeNavButton';
import { LinkedIn } from '@/components/LinkedInLogo';
// import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('RootLayout');

  return (
    <BaseTemplate
      leftNav={(
        <>
          <li className="h-auto w-24 duration-150 hover:scale-110">
            <Link
              href="/"
            >
              <HomeNavButton></HomeNavButton>
            </Link>
          </li>
          <li className="hidden sm:flex sm:h-full sm:items-center sm:hover:border-b-2 sm:hover:border-teal-700 sm:hover:text-teal-700">
            <Link
              href="/development/"
            >
              {t('development_link')}
            </Link>
          </li>
          <li className="hidden sm:flex sm:h-full sm:items-center sm:hover:border-b-2 sm:hover:border-teal-700 sm:hover:text-teal-700">
            <Link
              href="/design/"
            >
              {t('design_link')}
            </Link>
          </li>
          <li className="hidden sm:flex sm:h-full sm:items-center sm:hover:border-b-2 sm:hover:border-teal-700 sm:hover:text-teal-700">
            <Link
              href="/resume/"
            >
              {t('resume_link')}
            </Link>
          </li>
          <li className="hidden sm:flex sm:h-full sm:items-center sm:hover:border-b-2 sm:hover:border-teal-700 sm:hover:text-teal-700">
            <Link
              href="/contact/"
            >
              {t('contact_link')}
            </Link>
          </li>
        </>
      )}
      rightNav={(
        <>
          <li className="sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </li>
          <li className="hidden sm:block sm:size-5 sm:duration-150 sm:hover:scale-110 md:size-8">
            <LinkedIn></LinkedIn>
          </li>

          {/* <li>
            <LocaleSwitcher />
          </li> */}
        </>
      )}
    >
      <div className="text-xl">{props.children}</div>
    </BaseTemplate>
  );
}
