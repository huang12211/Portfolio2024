import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { AiImage } from '@/components/AiImage';
import { Cartoon } from '@/components/Cartoon';
import { Csharp } from '@/components/Csharp';
import { Css } from '@/components/CssLogo';
import { Figma } from '@/components/Figma';
import { Html } from '@/components/HtmlLogo';
import { JavascriptLogo } from '@/components/JavascriptLogo';
import { Matlab } from '@/components/Matlab';
import { Python } from '@/components/Python';
import { PyTorch } from '@/components/PyTorch';
import { Scikitlearn } from '@/components/Scikitlearn';
import { Sql } from '@/components/Sql';
import { Tensorflow } from '@/components/Tensorflow';
import { TypescriptLogo } from '@/components/TypescriptLogo';

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
      <div className="border-grey-300 flex items-center border-b py-4">
        <Cartoon></Cartoon>
        <div className="h-auto w-full px-4">
          <p className="pb-3 text-center font-['Georgia'] text-6xl font-bold italic">
            {t('hi_text')}
          </p>
          <p className="text-xl font-bold">
            {t('im_text')}
            <span className="text-3xl font-bold text-dark-coral">
              {t('full_name')}
            </span>
            <span>,</span>
          </p>
          <p className="text-xl font-bold">
            {t('introduce_me_1')}
            <span className="italic text-bright-coral">
              {t('introduce_me_2')}
            </span>
            {t('introduce_me_3')}
            <span className="italic text-bright-coral">
              {t('introduce_me_4')}
            </span>
            {t('introduce_me_5')}
          </p>
        </div>
      </div>
      {/* First Block under Intro */}
      <div className="rounded-xl border-2 border-pale-teal px-8 py-20">
        <p className="text-black">
          {t('primary_role')}
        </p>
      </div>
      {/* Second Block under Intro */}
      <div className="grid grid-cols-3 gap-2 bg-pale-blue p-8">
        <div className="col-span-2 py-4">
          <p className="pb-4">
            {t('ai_ml_paragraph')}
          </p>
          <p className="w-full border-b border-gray-500 pt-2 text-gray-500">
            {t('experience_section')}
          </p>
          <ul className="list-outside list-disc ps-6 text-base text-gray-500">
            <li>
              <a
                href="/"
              >
                MIT Certification - Leveraging AI for Effective Decision-Making
              </a>
            </li>
          </ul>
        </div>
        <div className="content-center bg-red-100">
          <AiImage></AiImage>
        </div>
      </div>
      {/* Third Block under Intro */}
      <div className="grid grid-cols-3 gap-2 bg-pale-purple p-8">
        <div>
          <AiImage></AiImage>
        </div>
        <div className="col-span-2">
          <p>
            {t('developer_role')}
          </p>
          <p className="w-full border-b border-gray-500 pt-2 text-gray-500">
            {t('skills_section')}
          </p>
          <p className="w-full border-b border-gray-500 pt-2 text-gray-500">
            {t('tools_section')}
          </p>
          <div className="flex h-14 flex-row items-center gap-4 overflow-hidden object-none">
            <Python></Python>
            <Tensorflow></Tensorflow>
            <PyTorch></PyTorch>
            <Scikitlearn></Scikitlearn>
            <Matlab></Matlab>
            <Csharp></Csharp>
            <Sql></Sql>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 bg-pale-coral p-8">
        <div className="col-span-2">
          <p>
            {t('design_role')}
          </p>
          <p className="w-full border-b border-gray-500 pt-2 text-gray-500">
            {t('skills_section')}
          </p>
          <p className="w-full border-b border-gray-500 pt-2 text-gray-500">
            {t('tools_section')}
          </p>
          <div className="flex h-14 flex-row items-center gap-4 overflow-hidden object-none">
            <Html></Html>
            <Css></Css>
            <JavascriptLogo></JavascriptLogo>
            <TypescriptLogo></TypescriptLogo>
            <Figma></Figma>
          </div>
        </div>
        <div>
          <AiImage></AiImage>
        </div>
      </div>

    </>
  );
}
