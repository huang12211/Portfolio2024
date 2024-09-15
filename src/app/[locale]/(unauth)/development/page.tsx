import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { ProjectCard } from '@/components/ProjectCard';

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
      <div className="mx-auto max-w-screen-lg pb-4 pt-2">
        <div>
          <h1 className="py-4 text-xl font-black">{t('page_title')}</h1>
        </div>
        <div className="relative">
          <h2 className="text-lg italic">Machine Learning / AI</h2>
          <div className="flex flex-wrap gap-4 py-4">
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
          <h2 className="pt-4 text-lg italic">Virtual Reality</h2>
          <div className="flex flex-wrap gap-4 py-4">
            <ProjectCard
              card_image_src="/assets/images/HockeyProject.png"
              popup_image_src="/assets/images/HockeyPopup.png"
              image_alt="Hockey"
              title="Hockey Concussion Project"
            />
          </div>
          <h2 className="pt-4 text-lg italic">Web Development</h2>
          <div className="flex flex-wrap gap-4 py-4">
            <ProjectCard
              card_image_src="/assets/images/ElainesEasecipes.png"
              popup_image_src="/assets/images/ElainesEasecipesFigma.png"
              image_alt="Elaine's Easecipes Website"
              title="Elaine's Easecipes"
            />
          </div>
        </div>
      </div>
    </>
  );
}
