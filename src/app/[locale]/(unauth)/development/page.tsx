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
      <div className="mx-auto max-w-screen-md pb-4 pt-2">
        <div className="py-4 font-black">
          <h1>{t('page_title')}</h1>
        </div>
        <div className="relative">

          <div className="flex flex-wrap gap-4">
            <ProjectCard
              image_src="/assets/images/FacialEmotions.png"
              image_alt="Emotions"
              title="Facial Emotion Detection"
            />

            <ProjectCard
              image_src="/assets/Home/CartoonElaineWave.png"
              image_alt="Emotions"
              title="Facial Emotion Detection"
            />

            <ProjectCard
              image_src="/assets/Home/CartoonElaineWave.png"
              image_alt="Emotions"
              title="Facial Emotion Detection"
            />

            <ProjectCard
              image_src="/assets/Home/CartoonElaineWave.png"
              image_alt="Emotions"
              title="Facial Emotion Detection"
            />

            <ProjectCard
              image_src="/assets/Home/CartoonElaineWave.png"
              image_alt="Emotions"
              title="Facial Emotion Detection"
            />
          </div>
        </div>
      </div>
    </>
  );
}
