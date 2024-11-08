// import { useTranslations } from 'next-intl';
// import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata() {
  // const t = await getTranslations({
  //   locale: props.params.locale,
  //   namespace: 'Synthe',
  // });

  return {
    title: 'Elaine\'s Easecipes',
    description: 'Personal Food Website',
  };
}

export default function Design() {
  // unstable_setRequestLocale(props.params.locale);
  // const t = useTranslations('NaviScout');

  return (
    <>
      <div className="pb-4">
        <div className="bg-gray-200">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-6 px-6 py-16">
            <div className="flex flex-col gap-2">
              <h1>Elaine's Easecipes</h1>
              <h2 className="text-orange-400">
                A Journal of all of my Family's Favourite Food Recipes
              </h2>
            </div>
            <div className="caseIntro">
              <p>
                This is a personal project where I journal all recipes that I have collected from my time with friends and loved ones.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-screen-xl gap-10 p-16 md:grid-cols-2 md:grid-rows-1">
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4">
            <h4>The Vision</h4>
            <p className="text-lg">
              Create a website containing all of my favourite recipes and associated stories that I've collected from people I've met over the years.
              I would love to eventually create a hard-copy version of this that I could then pass on to my children.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4">
            <h4>My Role</h4>
            <p className="text-base">
              Designer, developer and principal user.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h3 className="text-center">Context</h3>
            <p>
              This website's main purpose is to act as a source of inspiration whenever I find myself getting tired of reusing the same 7 recipes that come top of mind when I'm out grocery shopping.
              It's secondary purpose is the act as a reference for friends and family who ask me for the recipe to a specific dish that I've made for them in the past.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h3 className="text-center">Design Phase</h3>
            <h4 className="text-lg font-semibold">Wireframes in Figma</h4>
            <div>
              <iframe
                // style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                title="figma low fidelity prototype"
                width="350"
                height="650"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpijcVhQPrJIuNDDJV64tVJ%2FWireFrames---Elaine's-Eats%3Ftype%3Ddesign%26node-id%3D10-1131%26scaling%3Dscale-down%26page-id%3D10%253A356%26starting-point-node-id%3D10%253A1131"
                allowFullScreen
                className="mx-auto max-h-screen"
              >
              </iframe>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h3 className="text-center">Development Phase</h3>
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <p>
              The Website has been written in Vanilla Javascript
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h3 className="text-center">What I've Learnt</h3>
            <p>
              To fill in.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h3 className="text-center">Final Product</h3>
            <p>
              Please click on the following link to peruse the final product:
              <Link
                href="https://huang12211.github.io/ElaineFoodWebsite/"
                target="_blank>"
                className="text-sky-500 hover:underline"
              >
                {' '}
                Elaine's Easecipes
              </Link>
            </p>
          </div>
          <div>
            <Image
              src="/assets/images/homePageFoodWebsite.png"
              alt="recipe page for blueberry muffins"
              width="600"
              height="1024"
              className="mx-auto h-auto w-4/5 max-w-screen-lg"
            />
            <Image
              src="/assets/images/recipePage.png"
              alt="recipe page for blueberry muffins"
              width="400"
              height="1024"
              className="mx-auto h-auto w-1/2 max-w-screen-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
