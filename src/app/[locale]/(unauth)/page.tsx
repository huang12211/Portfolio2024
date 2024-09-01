import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Cartoon } from '@/components/Cartoon';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('Index');

  return (
    <>
      <div className="flex items-center bg-amber-400">
        <Cartoon></Cartoon>
        <p className="px-4 text-black">
          {t('introduce_me_paragraph')}
        </p>
      </div>
      <div className="bg-[#5cacac] px-12 py-4">
        <p className="text-white">
          {t('primary_role')}
        </p>
      </div>
      <div className="bg-sky-600 px-12 py-4">
        <p className="text-white">
          {t('ai_ml_paragraph')}
        </p>
        <p className="text-white underline">
          {t('experience_section')}
        </p>
      </div>
    </>
  );
}
