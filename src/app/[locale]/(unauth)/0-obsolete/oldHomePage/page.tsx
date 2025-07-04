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
      <div className="bg-teal-500 bg-opacity-20 py-10 sm:py-10 md:py-20">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 grid-rows-2 items-center justify-items-center gap-4 px-6 sm:grid-cols-2 sm:grid-rows-1 sm:px-4 md:gap-16 md:px-16">
          <Cartoon />
          <div className="h-auto w-full pt-4 sm:px-4 sm:pt-0">
            <div>
              <div className="relative pb-3 text-center font-['Georgia'] text-6xl font-bold italic text-gray-700 sm:text-7xl md:text-8xl xl:text-9xl">
                {t('hi_text')}
              </div>
            </div>
            <p className="text-center text-2xl font-bold sm:text-left md:text-4xl xl:text-6xl">
              {t('im_text')}
              <span className="text-3xl font-bold italic text-rose-500 sm:text-4xl md:text-6xl xl:text-7xl">
                {t('full_name')}
              </span>
              <span>,</span>
            </p>
            <p className="pt-2 text-center text-lg font-bold leading-relaxed sm:text-left md:text-2xl xl:text-4xl xl:leading-[3rem]">
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
            <p className="pt-4 text-xs font-medium leading-relaxed md:pt-10 md:text-lg xl:text-2xl">
              Designer by choice, developer in the making, and a generalist at heart.
              Over 5 years of experience working in diverse environments, on healthcare products.
              Life-long learner; looking for opportunities to hone my design skills.
            </p>
          </div>
        </div>
      </div>

      <div className="py-14">
        {/* Second Block under Intro */}
        {/* <div className="bg-sky-200"> */}
        <div>
          <div className="mx-auto my-2 max-w-screen-xl">
            <div className="mx-6 grid rounded-3xl border-2 px-4 py-6 md:grid-cols-3 md:gap-8 md:py-12">
              <div className="md:col-span-2 md:py-2 md:text-right">
                <div className="pb-4 text-xl md:text-3xl">
                  <p>
                    {t('ai_ml_paragraph')}
                    <span
                      className="font-extrabold italic text-sky-600"
                    >
                      {t('introduce_me_4')}
                    </span>
                    <span>
                      {t('ai_ml_paragraph_2')}
                    </span>
                  </p>

                </div>
                <div className="text-base md:text-xl">
                  <p className="w-full border-b border-gray-500 pt-2 text-gray-500 md:ml-2">
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
              </div>
              <div className="flex flex-col place-items-center gap-2 pt-4 md:pt-0">
                <HomeSectionImg
                  image_src="/assets/Home/AI.png"
                  image_alt="AI image"
                />
                <Link
                  href=" /development/"
                  className="mx-6 flex shrink justify-center rounded-full border-4 border-gray-700 px-6 text-center text-base shadow-xl duration-150 hover:scale-110 hover:bg-sky-300 hover:font-bold md:text-xl"
                >
                  {t('see_projects')}
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Third Block under Intro */}
        {/* <div className="bg-rose-200"> */}
        <div>
          <div className="mx-auto my-2 max-w-screen-xl">
            <div className="mx-6 grid rounded-3xl border-2 px-4 py-6 md:grid-cols-3 md:gap-8 md:py-12">
              <div className="hidden flex-col place-items-center gap-2 pb-4 md:flex md:pb-0">
                <HomeSectionImg
                  image_src="/assets/Home/CleanCode.png"
                  image_alt="Clean Code Image"
                />
                <Link
                  href=" /development/"
                  className="mx-6 flex shrink justify-center rounded-full border-4 border-gray-700 px-6 text-center text-base shadow-xl duration-150 hover:scale-110 hover:bg-rose-300 hover:font-bold md:text-xl"
                >
                  {t('see_projects')}
                </Link>
              </div>
              <div className="md:col-span-2 md:py-2 md:text-left">
                <div className="pb-4 text-xl md:text-3xl">
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
                <div className="text-base md:text-xl">
                  <p className="mr-2 w-full border-b border-gray-500 pt-2 text-gray-500">
                    {t('skills_section')}
                  </p>
                  <ul className="text-gray-500">
                    <li>Python for Machine Learning applications</li>
                    <li>Virtual reality development</li>
                    <li>Web development</li>
                    <li>Automation of Data Analysis, V&V testing and Documentation </li>
                  </ul>
                  <p className="mr-2 w-full border-b border-gray-500 pt-4 text-gray-500">
                    {t('tools_section')}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 overflow-hidden object-none">
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
              <div className="flex flex-col place-items-center gap-2 pt-4 md:hidden">
                <HomeSectionImg
                  image_src="/assets/Home/CleanCode.png"
                  image_alt="Clean Code Image"
                />
                <Link
                  href=" /development/"
                  className="mx-6 flex shrink justify-center rounded-full border-4 border-gray-700 px-6 text-center text-base shadow-xl duration-150 hover:scale-110 hover:bg-rose-300 hover:font-bold md:text-xl"
                >
                  {t('see_projects')}
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Fourth Section */}
        {/* <div className="bg-purple-200"> */}
        <div>
          <div className="mx-auto my-2 max-w-screen-xl">
            <div className="mx-6 grid rounded-3xl border-2 px-4 py-6 md:grid-cols-3 md:gap-8 md:py-12">
              <div className="md:col-span-2 md:py-2 md:text-right">
                <div className="pb-4 text-xl md:text-3xl">
                  <p>
                    {t('design_role')}
                    <span
                      className="font-extrabold italic text-purple-500"
                    >
                      {t('design_role_highlight')}
                    </span>
                    {t('design_role_2')}
                  </p>
                </div>
                <div className="text-base md:text-xl">
                  <p className="ml-2 w-full border-b border-gray-500 pt-2 text-gray-500">
                    {t('skills_section')}
                  </p>
                  <ul className="text-gray-500">
                    <li>Front-end development</li>
                    <li>UI Prototyping</li>
                    <li>User Research</li>
                    <li>Usability and Validation Testing</li>
                  </ul>
                  <p className="ml-2 w-full border-b border-gray-500 pt-4 text-gray-500">
                    {t('tools_section')}
                  </p>
                </div>
                <div className="flex h-14 flex-row items-center gap-4 overflow-hidden object-none md:justify-end">
                  <HtmlLogo></HtmlLogo>
                  <Css></Css>
                  <JavascriptLogo></JavascriptLogo>
                  <TypescriptLogo></TypescriptLogo>
                  <Figma></Figma>
                </div>
              </div>
              <div className="flex flex-col place-items-center gap-2 pt-4 md:pt-0">
                <HomeSectionImg
                  image_src="/assets/Home/UX_erased.png"
                  image_alt="UX image"
                />
                <Link
                  href=" /design/"
                  className="mx-6 flex shrink justify-center rounded-full border-4 border-gray-700 px-6 text-center text-base shadow-xl duration-150 hover:scale-110 hover:bg-purple-300 hover:font-bold md:text-xl"
                >
                  {t('see_projects')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Let's get in touch! */}
      <div className="grid grid-rows-2 gap-4 bg-teal-500 bg-opacity-50 p-10 md:gap-6 md:p-20">
        <p className="w-full text-center font-[Georgia] text-4xl font-black md:text-6xl">
          {t('connect_msg')}
        </p>
        <div className="flex place-content-center">
          <Link
            href="/contact/"
            className="place-content-center rounded-full border-4 border-gray-700 px-2 text-xl font-black shadow-xl duration-150 hover:scale-125 hover:bg-teal-500 md:px-6 md:text-3xl"
          >
            {t('connect_btn')}
          </Link>
        </div>
      </div>

    </>
  );
}
