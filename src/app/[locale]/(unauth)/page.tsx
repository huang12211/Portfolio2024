import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { CPlusPlus } from '@/components/C++Logo';
import { Cartoon } from '@/components/Cartoon';
import { Csharp } from '@/components/Csharp';
import { Css } from '@/components/CssLogo';
import { Figma } from '@/components/Figma';
import { HomeSectionImg } from '@/components/HomeSectionImg';
import { HtmlLogo } from '@/components/HtmlLogo';
import { JavascriptLogo } from '@/components/JavascriptLogo';
import { Keras } from '@/components/KerasLogo';
import { Matlab } from '@/components/Matlab';
import { Python } from '@/components/Python';
import { ReactLogo } from '@/components/ReactLogo';
import { Scikitlearn } from '@/components/Scikitlearn';
import { SQLiteLogo } from '@/components/SQLiteLogo';
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
        <div className="mx-auto max-w-screen-lg py-16">
          <div className="flex items-center py-4">
            <Cartoon></Cartoon>
            <div className="h-auto w-full px-4">
              <p className="pb-3 text-center font-['Georgia'] text-9xl font-bold italic">
                {t('hi_text')}
              </p>
              <p className="text-4xl font-bold">
                {t('im_text')}
                <span className="text-6xl font-bold italic text-rose-500">
                  {t('full_name')}
                </span>
                <span>,</span>
              </p>
              <p className="pt-2 text-2xl font-bold leading-relaxed">
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
        <div className="mx-auto max-w-screen-lg grid grid-cols-3 gap-2 p-8">
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
      <div className="bg-sky-200">
        <div className="mx-auto grid max-w-screen-lg grid-cols-3 gap-8 px-4 py-12">
          <div className="col-span-2 py-2 text-right">
            <div className="pb-4 text-3xl">
              <p>
                {t('ai_ml_paragraph')}
                <span
                  className="text-3xl font-extrabold italic text-sky-600"
                >
                  {t('introduce_me_4')}
                </span>
              </p>
              <p>
                {t('ai_ml_paragraph_2')}
              </p>
            </div>
            <p className="w-full border-b border-gray-500 pt-2 text-gray-500">
              {t('experience_section')}
            </p>
            <p className="pt-2 font-bold text-gray-500">
              Certification - Leveraging AI for Effective Decision-Making,
            </p>
            <p className="italic text-gray-500">
              Massachusetts Institute of Technology (MIT)
            </p>
            <p className="pt-2 font-bold text-gray-500">
              Bachelor's Degree in Biomedical Engineering,
            </p>
            <p className="italic text-gray-500">
              University of Waterloo, Ontario, Canada
            </p>
          </div>
          <div className="flex flex-col place-items-center gap-2">
            <div>
              <HomeSectionImg
                image_src="/assets/Home/AI.png"
                image_alt="AI image"
              />
            </div>
            <div className="flex justify-center">
              <Link
                href=" /development/"
                className="rounded-full border-4 border-gray-700 px-6 text-xl shadow-xl duration-150 hover:scale-110 hover:bg-sky-300 hover:font-bold"
              >
                {t('see_projects')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Third Block under Intro */}
      <div className="bg-rose-200">
        <div className="mx-auto grid max-w-screen-lg grid-cols-3 gap-8 px-4 py-12">
          <div className="flex flex-col place-items-center gap-2">
            <div>
              <HomeSectionImg
                image_src="/assets/Home/CleanCode.png"
                image_alt="AI image"
              />
            </div>
            <div className="flex justify-center">
              <Link
                href=" /development/"
                className="rounded-full border-4 border-gray-700 px-6 text-xl shadow-xl duration-150 hover:scale-110 hover:bg-rose-300 hover:font-bold"
              >
                {t('see_projects')}
              </Link>
            </div>
          </div>
          <div className="col-span-2 py-2">
            <div className="pb-4 text-3xl">
              <p>
                {t('developer_role')}
                <span
                  className="font-extrabold italic text-rose-500"
                >
                  {t('developer_role_highlight')}
                </span>
                {t('developer_role_2')}
              </p>
            </div>
            <p className="w-full border-b border-gray-500 pt-2 text-gray-500">
              {t('skills_section')}
            </p>
            <ul className="text-gray-500">
              <li>Python for Machine Learning applications</li>
              <li>Virtual reality development</li>
              <li>Web development</li>
              <li>Automation of Data Analysis, V&V testing and Documentation </li>
            </ul>
            <p className="w-full border-b border-gray-500 pt-4 text-gray-500">
              {t('tools_section')}
            </p>
            <div className="flex h-14 flex-row items-center gap-4 overflow-hidden object-none">
              <Python></Python>
              <Tensorflow></Tensorflow>
              <Keras></Keras>
              <Scikitlearn></Scikitlearn>
              <Csharp></Csharp>
              <CPlusPlus></CPlusPlus>
              <ReactLogo></ReactLogo>
              <SQLiteLogo></SQLiteLogo>
              <Matlab></Matlab>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth Section */}
      <div className="bg-purple-200">
        <div className="mx-auto grid max-w-screen-lg grid-cols-3 gap-8 px-4 py-12">
          <div className="col-span-2 py-2 text-right">
            <div className="pb-4 text-3xl">
              <p>
                {t('design_role')}
                <span
                  className="text-3xl font-extrabold italic text-purple-500"
                >
                  {t('design_role_highlight')}
                </span>
                {t('design_role_2')}
              </p>
            </div>
            <p className="w-full border-b border-gray-500 pt-2 text-gray-500">
              {t('skills_section')}
            </p>
            <ul className="text-gray-500">
              <li>Front-end development</li>
              <li>UI Prototyping</li>
              <li>User Research</li>
              <li>Usability and Validation Testing</li>
            </ul>
            <p className="w-full border-b border-gray-500 pt-4 text-gray-500">
              {t('tools_section')}
            </p>
            <div className="flex h-14 flex-row items-center justify-end gap-4 overflow-hidden object-none">
              <HtmlLogo></HtmlLogo>
              <Css></Css>
              <JavascriptLogo></JavascriptLogo>
              <TypescriptLogo></TypescriptLogo>
              <Figma></Figma>
            </div>
          </div>
          <div className="flex flex-col place-items-center gap-2">
            <div>
              <HomeSectionImg
                image_src="/assets/Home/UX_erased.png"
                image_alt="UX image"
              />
            </div>
            <div className="flex justify-center">
              <Link
                href=" /design/"
                className="rounded-full border-4 border-gray-700 px-6 text-xl shadow-xl duration-150 hover:scale-110 hover:bg-purple-300 hover:font-bold"
              >
                {t('see_projects')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Let's get in touch! */}
      <div className="grid grid-rows-2 gap-6 bg-teal-500 bg-opacity-50 p-20">
        <p className="w-full text-center font-[Georgia] text-6xl font-black">
          {t('connect_msg')}
        </p>
        <div className="flex place-content-center">
          <Link
            href="/contact/"
            className="place-content-center rounded-full border-4 border-gray-700 px-6 text-3xl font-black shadow-xl duration-150 hover:scale-125 hover:bg-teal-500"
          >
            {t('connect_btn')}
          </Link>
        </div>
      </div>

    </>
  );
}
