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
          <li className="h-auto w-20 md:h-auto md:w-32">
            <Link
              href="/"
              className="border-none font-bold text-gray-700 hover:text-cyan-700"
            >
              <HomeNavButton></HomeNavButton>
            </Link>
          </li>
          <li>
            <Link
              href="/development/"
              className="border-none font-bold text-gray-700 hover:text-cyan-700"
            >
              {t('development_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/design/"
              className="border-none font-bold text-gray-700 hover:text-cyan-700"
            >
              {t('design_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/resume/"
              className="border-none font-bold text-gray-700 hover:text-cyan-700"
            >
              {t('resume_link')}
            </Link>
          </li>
        </>
      )}
      rightNav={(
        <>
          <li className="size-5 md:size-8">
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
