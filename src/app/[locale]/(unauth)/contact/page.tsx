import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Contact',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Resume(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('Contact');

  return (
    <>
      <div className="mx-auto max-w-screen-xl pb-12 pt-24">
        <div className="flex flex-row place-content-center">
          <h1 className="text-6xl font-black text-teal-700 lg:text-8xl">{t('page_title')}</h1>
        </div>
        <div className="relative pt-40 md:pt-0">
          <div>
            <Image
              src="/assets/Icons - General/wiredPhone.png"
              alt="Wired Phone"
              width={556}
              height={247}
              className="w-full object-cover"
            />
          </div>
          <div className="absolute left-[50%] top-[15%] -ml-[50%] grid w-full grid-rows-2 place-content-center gap-4 font-['Georgia'] text-xl">
            <div className="flex flex-row items-center gap-4">
              <Image
                src="/assets/Icons - General/emailIcon.png"
                alt="Email logo"
                width={1024}
                height={1024}
                className="h-12 w-auto rounded-lg object-cover lg:h-16"
              />
              <p className="text-xl lg:text-2xl">huang12211@gmail.com</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Image
                src="/assets/Icons - General/linkedinIcon.png"
                alt="LinkedIn Logo"
                width={1024}
                height={1024}
                className="h-12 w-auto rounded-lg object-cover lg:h-16"
              />
              <a
                href="https://www.linkedin.com/in/elaine-y-huang/"
                target="_blank"
                className="text-xl text-sky-600 hover:underline lg:text-2xl"
              >
                https://www.linkedin.com/in/elaine-y-huang/
              </a>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Image
                src="/assets/Icons - General/github.png"
                alt="Github Logo"
                width={230}
                height={230}
                className="h-12 w-auto rounded-lg object-cover lg:h-16"
              />
              <a
                href="https://github.com/huang12211/"
                target="_blank"
                className="text-xl text-sky-600 hover:underline lg:text-2xl"
              >
                https://github.com/huang12211/
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
