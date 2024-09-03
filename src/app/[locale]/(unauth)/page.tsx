import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Cartoon } from '@/components/Cartoon';
import { Csharp } from '@/components/Csharp';
import { Css } from '@/components/CssLogo';
import { Figma } from '@/components/Figma';
import { HomeSectionImg } from '@/components/HomeSectionImg';
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
      <div className="bg-orange-100">
        <div className="mx-auto max-w-screen-md py-12">
          <div className="flex items-center py-4">
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
        </div>
      </div>
      {/* First Block under Intro */}
      {/* <div className = "bg-pale-teal">
        <div className="mx-auto max-w-screen-md grid grid-cols-3 gap-2 p-8">
          <div>
            <AiImage></AiImage>
          </div>
          <div className="col-span-2">
            <p>
              {t('primary_role')}
            </p>
          </div>
        </div>
      </div> */}

      {/* Second Block under Intro */}
      <div className="bg-sky-100">
        <div className="mx-auto grid max-w-screen-md grid-cols-3 gap-4 px-4 py-12">
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
          <div>
            <HomeSectionImg
              image_src="/assets/Home/AI.png"
              image_alt="AI image"
            />
          </div>
        </div>
      </div>
      {/* Third Block under Intro */}
      <div className="bg-purple-100">
        <div className="mx-auto grid max-w-screen-md grid-cols-3 gap-4 px-4 py-12">
          <div>
            <HomeSectionImg
              image_src="/assets/Home/AI.png"
              image_alt="AI image"
            />
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
      </div>
      {/* Fourth Section */}
      <div className="bg-red-200">
        <div className="mx-auto grid max-w-screen-md grid-cols-3 gap-4 px-4 py-12">
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
            <HomeSectionImg
              image_src="/assets/Home/AI.png"
              image_alt="AI image"
            />
          </div>
        </div>
      </div>
      {/* Let's get in touch! */}
      <div className="grid grid-rows-2 gap-6 bg-cyan-100 p-20">
        <p className="w-full text-center font-[Georgia] text-6xl font-black">
          Let's connect!
        </p>
        <div className=" flex justify-center">
          <button className="rounded-full border-4 border-gray-700 px-6 text-3xl shadow-xl duration-150 hover:scale-110">
            CONTACT
          </button>
        </div>
      </div>

    </>
  );
}
