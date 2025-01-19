// import { PDFWindow } from '@/components/PDFWindow';
import Image from 'next/image';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

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
    <div className="mx-auto max-w-screen-xl px-16 pb-4">
      <div>
        {/* <PDFWindow
          pdf_path="/assets/files/Elaine_Huang_CV.pdf"
        /> */}
        <Image
          src="/assets/images/resumeImg.png"
          alt="resume"
          width="1218"
          height="1528"
          className="mx-auto h-auto w-[90%] object-cover"
        />
        <iframe
          src="/assets/files/Elaine_Huang_CV.pdf"
          title="resume document"
          width="200"
          height="200"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
