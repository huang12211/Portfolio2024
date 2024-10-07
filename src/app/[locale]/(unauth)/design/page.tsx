import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { DesignProjectCard } from '@/components/DesignProjectCard';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Design',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Design(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('Design');

  return (
    <>
      <div className="z-0 mx-auto max-w-screen-lg px-6 pb-4">
        <div className="pb-10 pt-8">
          <h1 className="content-center text-center font-[Georgia] text-5xl font-black">{t('page_title')}</h1>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <DesignProjectCard
              card_image_src="/assets/images/NaviScout.png"
              image_alt="NaviScout"
              title="NaviScout"
              subtitle="A Spine Navigation System for Out-patient Clinics"
              page_link="/design/naviscout/"
              bg_color="rgb(186 230 253)"
              alignment="start"
            />
            <DesignProjectCard
              card_image_src="/assets/images/HockeyProject.png"
              image_alt="Hockey"
              title="MEMs for Tibial-axis Registration"
              subtitle="A proof-of-concept for non-invasive tibial-axis registration"
              page_link="/design/motorized-IMU/"
              bg_color="rgb(204 251 241)"
              alignment="start"
            />
            <DesignProjectCard
              card_image_src="/assets/images/ElainesEasecipes.png"
              image_alt="RecipesWebsite"
              title="Synthetic Cadavers"
              subtitle="Research Initiative with Concordia University"
              page_link="/design/synthetic-cadavers/"
              bg_color="rgb(253 164 175)"
              alignment="end"
            />
          </div>
        </div>
      </div>
    </>
  );
}
