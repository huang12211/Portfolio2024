import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Development',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Development(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('Development');

  return (
    <>
      <div>
        <h1>{t('page_title')}</h1>
      </div>
    </>
  );
}
