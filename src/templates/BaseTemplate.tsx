import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="h-auto w-full text-gray-700 antialiased">
      <div className="mx-auto">
        <header className="fixed z-50 mb-0.5 w-full border-b border-gray-100 bg-white shadow">
          <div className="mx-auto flex max-w-screen-lg flex-row justify-between gap-x-5 px-4 pt-2">
            <nav>
              <ul className="flex h-12 w-auto items-center gap-x-5 text-sm font-bold text-gray-700 md:h-16 md:w-auto md:text-xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex h-12 w-auto items-center gap-x-2 text-sm md:h-16 md:w-auto md:text-2xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header>

        <main className="pt-[3.7rem] md:pt-[4.7rem]">
          {props.children}
        </main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. ${t('made_with')} `}
          .

        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
