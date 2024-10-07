import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { ProjectCard } from '@/components/ProjectCard';
// import { ProjectCardInProgress } from '@/components/ProjectCardInProgress';

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
      <div className="z-0 mx-auto max-w-screen-lg px-6 pb-4">
        <div className="py-8">
          <h1 className="text-center font-[Georgia] text-5xl font-black">{t('page_title')}</h1>
        </div>
        <div className="relative">
          <h2 className="text-lg font-bold italic text-gray-500">MACHINE LEARNING / AI</h2>
          <div className="flex flex-wrap gap-4 py-2">
            <ProjectCard
              card_image_src="/assets/images/FacialEmotions.png"
              popup_image_src="/assets/images/FacialEmotionsPopupImg.png"
              image_alt="Emotions"
              title="Facial Emotion Detection"
            />

            <ProjectCard
              card_image_src="/assets/images/Hydrangea.png"
              popup_image_src="/assets/images/HydrangeaAndNoHydrangea.png"
              image_alt="Hydrangeas"
              title="Invasive Hydrangea Species Detection"
            />
          </div>
          <h2 className="pt-8 text-lg font-bold italic text-gray-500">WEB DEVELOPMENT</h2>
          <div className="flex flex-wrap gap-4 py-2">
            <ProjectCard
              card_image_src="/assets/images/ElainesEasecipes.png"
              popup_image_src="/assets/images/ElainesEasecipesFigma.png"
              image_alt="Elaine's Easecipes Website"
              title="Elaine's Easecipes"
            />
          </div>
          <h2 className="pt-4 text-lg font-bold italic text-gray-500">VIRTUAL REALITY</h2>
          <div className="flex flex-wrap gap-4 py-2">
            <ProjectCard
              card_image_src="/assets/images/HockeyProject.png"
              popup_image_src="/assets/images/HockeyPopup.png"
              image_alt="Hockey"
              title="Hockey Concussion Project"
            />
          </div>
        </div>
      </div>
    </>
  );
}
