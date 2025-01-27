// import { PDFWindow } from '@/components/PDFWindow';
import Image from 'next/image';
import Link from 'next/link';
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
    <div className="mx-auto max-w-screen-xl px-6 pb-4 md:px-16">
      <div>
        {/* <PDFWindow
          pdf_path="/assets/files/Elaine_Huang_CV.pdf"
        /> */}
        <Image
          src="/assets/images/resumeImg.png"
          alt="resume"
          width="1218"
          height="1528"
          className="mx-auto h-auto w-[95%] object-cover"
        />
        {/* <iframe
          src="/assets/files/Elaine_Huang_CV.pdf"
          title="resume document"
          width="200"
          height="200"
          className="mx-auto"
        /> */}
        <Link
          href="/assets/files/Elaine_Huang_CV.pdf"
        >
          <div className="mx-auto flex w-3/5 items-center justify-center gap-2 rounded-full border-4 border-gray-700 px-6 py-2 text-base shadow-xl duration-150 hover:scale-110 hover:bg-purple-400 hover:font-bold md:w-[45%] md:text-xl ">
            <p>Download CV </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mb-2 inline size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
