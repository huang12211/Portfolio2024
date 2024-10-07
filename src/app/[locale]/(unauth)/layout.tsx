import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { HomeNavButton } from '@/components/HomeNavButton';
import { LinkedIn } from '@/components/LinkedInLogo';
import LocaleSwitcher from '@/components/LocaleSwitcher';
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
          <li className="h-auto w-20 duration-150 hover:scale-110 md:h-auto md:w-24">
            <Link
              href="/"
            >
              <HomeNavButton></HomeNavButton>
            </Link>
          </li>
          <li className="flex h-full items-center hover:border-b-2 hover:border-cyan-700 hover:text-cyan-700">
            <Link
              href="/development/"
            >
              {t('development_link')}
            </Link>
          </li>
          <li className="flex h-full items-center hover:border-b-2 hover:border-cyan-700 hover:text-cyan-700">
            <Link
              href="/design/"
            >
              {t('design_link')}
            </Link>
          </li>
          <li className="flex h-full items-center hover:border-b-2 hover:border-cyan-700 hover:text-cyan-700">
            <Link
              href="/resume/"
            >
              {t('resume_link')}
            </Link>
          </li>
          <li className="flex h-full items-center hover:border-b-2 hover:border-cyan-700 hover:text-cyan-700">
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
          <li className="size-5 duration-150 hover:scale-110 md:size-8">
            <LinkedIn></LinkedIn>
          </li>

          <li>
            <LocaleSwitcher />
          </li>
        </>
      )}
    >
      <div className="text-xl">{props.children}</div>
    </BaseTemplate>
  );
}
