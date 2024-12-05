// import { useTranslations } from 'next-intl';
// import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata() {
  // const t = await getTranslations({
  //   locale: props.params.locale,
  //   namespace: 'Synthe',
  // });

  return {
    title: 'Synthetic Cadavers',
    description: 'Synthetic Cadavers Research Initiative',
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
              <h1 className="content-center text-center font-[Georgia] text-4xl font-black">Non-invasive Method for Tibial Mechanical-Axis Location</h1>
              <h2 className="content-center text-center font-[Georgia] text-2xl font-black italic text-teal-500">
                A new way to register the tibia for total knee arthroplasties
              </h2>
            </div>
            <div className="flex flex-col content-center gap-2 text-center">
              <p>
                I along with a team of 6 other coworkers created a proof of concept for a non-invasive way to locate the mechanical axis of the tibia.
                A patent was then filed which can be consulted
                <span className="text-sky-600 hover:underline">
                  <a href="/assets/files/Patent-20240156472.pdf" download target="_blank>">
                    {' '}
                    here
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mb-2 ml-1 inline size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </a>
                </span>
              </p>
              <p className="text-lg italic text-gray-500">
                To comply with my non-disclosure agreement, I have omitted confidential information in this case study.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 p-6 text-lg">
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4">
            <h3 className="text-xl font-medium">The Goal:</h3>
            <p className="text-base">
              Improve upon the existing product line, iAssist, which gives surgeons with smaller budgets a way to refine their cuts of the femur and the tibia
              in preparation for the installation of the knee joint implant using MEMs devices instead of a robot.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4">
            <h3 className="text-xl font-medium">My Role:</h3>
            <p className="text-base">
              Project advocate, coordinator, and mechanical designer for the prototype.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-semibold">Context</h2>
            <p>
              This was one of the projects to come out of the innovation program from the Montreal office.
              The initial intention was to generate a design for an implantable IMU into the medullary canal of the femur and tibia in order to perform a total knee arthroplasty.
              During the brainstorming phase of this project, an idea to redesign the existing hardware used to register the mechanical axis of the tibia was emphasized.
              In the end, a method that incorporates a distance measurement was converged upon and was deemed important enough to patent.
              All of the best ideas for every part of the surgical workflow were then fleshed out in a proof of concept to be presented to the board of directors that were visiting the Montreal office in 3 months.
              Creating this prototype because a passion project for the team, where many lunch and after-hour crafting sessions took place in order to finish the prototype in tiem for the presentation in August for the board of directors.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-black">Brainstorming Phase</h2>
            <h3 className="text-lg font-semibold">User Journey</h3>
            <p>
              The user's journey was fleshed out in a team of 4.
            </p>

            <Image
              src="/assets/images/iAssistTibialAlignmentNoLeg.png"
              alt="iAssist Tibia Alignment System"
              width={616}
              height={1352}
              className="h-auto w-1/4 object-cover"
            />

          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-black">Building it Out</h2>
            <h4 className="text-lg font-semibold">Challenges</h4>
            <p>
              1. fighting for SW ressources
              2. Fighting for time to work on the proejct from project managers
              3. coordination
              4. transfer of leadership responsibilities????
              5. cross-departmental collaboration
              6. ramping up Legal Team on patent
              The original team that came up with the rough idea of what to build, did not have the repertoire to create the software components that were required.
              So the initial challenge was to recruit some individiuals to build out software side for the proof of concept and simultaneously negotiate with their project leads to
              see if they could dedicate a minimum of 8 hours a week towards this project. Unfortunately, we had poor luck and around half of the projects that
              were under development at that time hit a emergent state due to various reasons and the software part of the prototype kept having to change hands.
              Unfortunately, we went through 3 different team iterations before finally finding a version that was able to deliver things on time.
              The original ressources assigned to the project were not able actually work on the prototype
            </p>
            <div className="grid grid-cols-3 gap-8 py-6">
              <div>
                <h3 className="text-base font-medium">Insight 1</h3>
                <p className="pt-2 text-sm">
                  To Fill In.
                </p>
              </div>
              <div>
                <h3 className="text-base font-medium">Insight 2</h3>
                <p className="pt-2 text-sm">
                  To Fill In.
                </p>
              </div>
              <div>
                <h3 className="text-base font-medium">Insight 3</h3>
                <p className="pt-2 text-sm">
                  To Fill In.
                </p>
              </div>
            </div>

            <h4 className="text-lg font-semibold">User Testing</h4>
            <p>
              To Fill in.
            </p>
            <div>
              <h3 className="pb-2 pt-4 text-base font-medium">How research was compiled and shared</h3>
              <p>
                To Fill in.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-bold">Verification & Validation Testing</h2>
            <h3 className="text-lg font-semibold">Verification Lead</h3>
            <p>
              To Fill in.
            </p>
          </div>
        </div> */}
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-bold">The Impact</h2>
            <p>
              The final prototype was presented to the board of directors in August of 2023.
              This led to the project being greenlit for the upcoming year's development roadmap.
            </p>
            <p className="pb-4 text-center text-gray-400">_______</p>
            <div className="flex flex-col gap-2 bg-gray-200 px-6 py-10 text-center">
              <h1 className="text-6xl font-black text-teal-500">
                100%
              </h1>
              <h4>Buy-in of the </h4>
              <h2 className="text-3xl">Board of Directors</h2>
              <p className="pt-2">
                The entire visiting board of directors were impressed and
                <span className="font-bold"> greenlit the budget</span>
                {' '}
                for the first year of development of the product.
              </p>
            </div>

            <p className="pb-6 text-center text-gray-400">_______</p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-bold">What I learned</h2>
            <p>
              This was a passion project for the entire team.
              It was the first instance in my corporate career where I had the chance to work alongside individuals who were passionate enough to work into the wee hours of the morning.
              We spent countless extra hours over our lunch breaks, and after-work on this project to be able to deliver it on time.
              It was such a joy working in such a collaborative and productive environemnt that once the project was over, returning to normal everyday work seemed so dull.
              I've since learnt that I thrive in a fast-paced environement and tend to perform best when under pressure as I treat is as an invigorating challenge.

            </p>
          </div>
        </div>

      </div>
    </>
  );
}
