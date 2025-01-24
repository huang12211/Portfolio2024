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
          <h1 className="-mt-6 px-8 text-4xl font-black text-teal-700 md:mt-0 md:px-0 md:text-6xl lg:text-8xl">{t('page_title')}</h1>
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
          <div className="absolute left-[50%] top-[5%] -ml-[50%] grid w-full grid-rows-2 place-content-center gap-4 font-['Georgia'] text-xl md:top-[15%]">
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <Image
                src="/assets/Icons - General/emailIcon.png"
                alt="Email logo"
                width={1024}
                height={1024}
                className="h-8 w-auto rounded-lg object-cover md:h-12 lg:h-16"
              />
              <p className="text-sm md:text-xl lg:text-2xl">huang12211@gmail.com</p>
            </div>
            <div className="flex flex-row items-center gap-2 md:gap-4">
              <Image
                src="/assets/Icons - General/linkedinIcon.png"
                alt="LinkedIn Logo"
                width={1024}
                height={1024}
                className="h-8 w-auto rounded-lg object-cover md:h-12 lg:h-16"
              />
              <a
                href="https://www.linkedin.com/in/elaine-y-huang/"
                target="_blank"
                className="text-sm text-sky-600 hover:underline md:text-xl lg:text-2xl"
              >
                <p className="">https://www.linkedin.com/in/elaine-y-huang/</p>
              </a>
            </div>
            <div className="flex flex-row items-center gap-2 md:gap-4">
              <Image
                src="/assets/Icons - General/github.png"
                alt="Github Logo"
                width={230}
                height={230}
                className="h-8 w-auto rounded-lg object-cover md:h-12 lg:h-16"
              />
              <a
                href="https://github.com/huang12211/"
                target="_blank"
                className="text-sm text-sky-600 hover:underline md:text-xl lg:text-2xl"
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
