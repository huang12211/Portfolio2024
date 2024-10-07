import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

// import { PDFWindow } from '@/components/PDFWindow';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Resume',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Resume(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <div className="mx-auto max-w-screen-lg pb-4">
      <div className="mt-4 max-h-[1450px]">
        {/* <PDFWindow
          pdf_path="/assets/resume/2024_Elaine_Huang.pdf"
        /> */}
      </div>
    </div>
  );
}
