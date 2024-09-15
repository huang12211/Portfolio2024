import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="h-auto w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto">
        <header className="border-grey-300 mb-0.5 border-b shadow">
          <div className="mx-auto flex max-w-screen-lg justify-between gap-x-5 pt-8">
            <nav>
              <ul className="flex h-16 w-auto items-center gap-x-5 text-sm md:h-24 md:w-auto md:text-2xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex h-16 w-auto items-center gap-x-2 text-sm md:h-24 md:w-auto md:text-2xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. ${t('made_with')} `}
          .

        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
