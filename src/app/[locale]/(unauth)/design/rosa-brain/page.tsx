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
    title: 'ROSA ONE Brain',
    description: 'ROSA ONE Brain, a Neurosurgical Robotic Assistant',
  };
}

export default function Design() {
  // unstable_setRequestLocale(props.params.locale);
  // const t = useTranslations('NaviScout');

  return (
    <>
      <div className="bg-gray-100 bg-opacity-30 pb-4">
        <div className="bg-gray-200">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-6 p-16">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-center gap-4">
                <h1>ROSA ONE Brain</h1>
                <Link
                  href="https://www.zimmerbiomet.com/en/products-and-solutions/zb-edge/robotics/rosa-brain.html"
                  target="_blank>"
                  className="content-center text-center font-[Georgia] text-4xl text-pink-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </Link>
              </div>
              <h2 className="text-pink-500">
                A Robotic Surgical Assistant for Minimally Invasive Brain Procedures
              </h2>
            </div>
            <div className="caseIntro">
              <p>
                ROSA ONE Brain was the first to surgical robot to market for SEEG procedurees and maintains the majority of the North American SEEG market. Since then,
                it has evolved to assist surgeons in completing Deep Brain Stimulation, Responsive Neurostimulation, Laser Ablation, Biopsies, and Transnasal and Ventricular Endoscopic Procedures.
                This is the product that I actively work on today.
              </p>
              <p className="caseNonDisclosure">
                To comply with my non-disclosure agreement, I have omitted confidential information in this case study.
              </p>
              <div className="mx-auto w-fit overflow-hidden">
                <video
                  src="/assets/images/ROSABrainOverview.mp4"
                  title="ROSA ONE Brain Overview"
                  muted
                  autoPlay
                  loop
                  width="1920"
                  height="1080"
                  className="-mx-9 -my-5 size-auto max-w-[26rem] object-cover object-center sm:max-w-lg lg:max-w-[43.25rem]"
                >
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-screen-xl gap-10 p-16 md:grid-cols-2 md:grid-rows-1">
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4">
            <h4>The Goal:</h4>
            <p className="text-lg">
              Iterate on the software and robotic features of the existing product to improve the user experience and adapt the flow to allow for the execution of a larger
              array of neurosurgical procedures.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4">
            <h4>My Role:</h4>
            <p className="text-lg">
              The responsibilities that fall under my perview are:
            </p>
            <ul className="list-outside list-disc pl-6 text-lg italic">
              <li>definition of the new features being implemented</li>
              <li>the overall user experience while mitigating against design risks and misuse</li>
              <li>high fidelity mock-ups of the UI</li>
              <li>verifying the performance of the features being developed</li>
              <li>validating that the implementated features meet the needs of the users in the field</li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-16 py-4 text-lg">
            <h3 className="text-center">Early Days...</h3>
            <h4>Qualitative Customer Interviews</h4>
            <p>
              User research at the start of the project was invaluable and was perfomed with 8 surgeons for various backgrounds. Some worked on trauma cases,
              others on children, and still others on the elderly. Each surgeon had different needs and all of their workflows differed. Around this time,
              we also consulted with our sales representatives in the field who travel all over the United States and Europe to support cases.
              All of this information was compiled so that we were able to lay out each surgical workflow that our system had to be able to support and define 3 main surgeon profiles:
            </p>

            {/* Eventually replace each surgeon's section with a Tabular interactive interface 1.Goals 2.Pains 3.Gains */}
            {/* Remember to mark the click as the currently active content, then hide all content, then show selected content */}
            <div className="my-10 bg-gray-200">
              <h4 className="px-10 py-6">3 Primary Customer Profiles</h4>
              {/* Dr. J */}
              <div className="mx-8 grid gap-4 pb-4 md:grid-cols-5 md:grid-rows-3">
                <div className="pt-4 md:pt-0">
                  <Image
                    src="/assets/images/surgeon2.png"
                    alt="surgeon 2"
                    width="144"
                    height="144"
                    className="object-cover"
                  />
                </div>
                <div className="col-span-4 content-center">
                  <p className="font-semibold italic">Dr. SpeedyGonzales</p>
                  <p>
                    Rising star within their hospital.
                    Has never used ROSA One Brain.
                    Would love to adopt ROSA One Brain for their hospital
                  </p>
                  <div className="py-4">
                    <p className="underline">Goals</p>
                    <ul className="list-outside list-disc pl-10">
                      <li>Performs surgeries that requires relatively low accuracy, where speed is the ultimate concern.</li>
                      <li>Prefers to use the patient registration method that does not require lots of preparation</li>
                      <li>Has complete control over the surgical plan</li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <p className="underline">Pains</p>
                    <ul className="list-outside list-disc pl-10">
                      <li>The time it takes to register the patient using the laser is sometimes not worth it when there is only one target</li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <p className="underline">Gains</p>
                    <ul className="list-outside list-disc pl-10">
                      <li>Using the robot in their hospital will allow the surgeon to take on riskier cases with more confidence due to its reported ability to better clinical outcomes compared to conventional surgery</li>
                    </ul>
                  </div>
                </div>

                {/* Dr. S */}
                <div className="pt-4 md:pt-0">
                  <Image
                    src="/assets/images/surgeon3.png"
                    alt="surgeon 2"
                    width="144"
                    height="144"
                    className="object-cover"
                  />
                </div>
                <div className="col-span-4 content-center">
                  <p className="font-semibold italic">Dr. Experimenter</p>
                  <p>
                    Takes pride in being an early adopter of all technology products for their specialty.
                    Long-time user of ROSA One Brain and continues to use it despite being exposed to its competitors.
                    Loves to discuss publishing opportunities.
                  </p>
                  <div className="py-4">
                    <p className="underline">Goals</p>
                    <ul className="list-outside list-disc pl-10">
                      <li>Executes surgical procedures that aim at minuscule targets so accuracy is top of mind</li>
                      <li>Works closely with the neurologist to plan and execute the surgery</li>
                      <li>Requires different modalities to accurately locate the targetted structures</li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <p className="underline">Pains</p>
                    <ul className="list-outside list-disc pl-10">
                      <li>Finds it cumbersome that both they and the neurologist must physically be on the same computer to plan the surgery</li>
                      <li>Would love to be able to import PET and functional MRIs to help with visualization</li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <p className="underline">Gains</p>
                    <ul className="list-outside list-disc pl-10">
                      <li>Allows surgeon to only need to use ROSA One Brain to execute their entire surgical plan</li>
                      <li>Eases their existing logistical flow with their neurologist</li>
                    </ul>
                  </div>
                </div>

                {/* Dr. D */}
                <div className="pt-4 md:pt-0">
                  <Image
                    src="/assets/images/surgeon1.png"
                    alt="surgeon 1"
                    width="144"
                    height="144"
                    className="object-cover"
                  />
                </div>
                <div className="col-span-4 content-center">
                  <p className="font-semibold italic">Dr. Loyal</p>
                  <p>
                    Internationally renown surgeon within their specialty of pediatrics.
                    Long-time user of ROSA One Brain.
                    Has an emotional attachment to the existing product and does not think that the product needs to change much.
                    Would love a more streamlined version of his favourite registration method.
                  </p>
                  <div className="py-4">
                    <p className="underline">Goals</p>
                    <ul className="list-outside list-disc pl-10">
                      <li>Plans meticulously and operates as fast as possible on 15+ targets. </li>
                      <li>Works closely with the neurologist to plan all the trajectories.</li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <p className="underline">Pains</p>
                    <ul className="list-outside list-disc pl-10">
                      <li>Finds it very difficult to find time when both they and the neurologist are available to physically be on the same computer to plan the surgery</li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <p className="underline">Gains</p>
                    <ul className="list-outside list-disc pl-10">
                      <li>A more streamlined registration method would allow for better patient outcomes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-screen-xl px-16">
            <div className="mx-auto my-10 flex max-w-screen-xl flex-col gap-0 border-2 bg-white px-10 py-4 text-lg md:gap-4">
              <h4>Key Insights</h4>
              <div className="grid grid-cols-1 grid-rows-3 gap-8 pb-6 md:grid-cols-3 md:grid-rows-1">
                <div>
                  <Image
                    src="/assets/images/clock.png"
                    alt="Clock"
                    width="144"
                    height="144"
                    className="mx-auto h-64 w-auto object-cover py-2"
                  />
                  <h5>Speed it Up</h5>
                  <p className="pt-2 text-base">
                    Surgeons complained about the time it takes for them to register the patient. Their primary need was to
                    increase the speed at which they can locate the patient within the robot's coordinate system.
                  </p>
                </div>
                <div>
                  <Image
                    src="/assets/images/ReduceChoices.png"
                    alt="Paths to choose from"
                    width="144"
                    height="144"
                    className="mx-auto h-64 w-auto object-cover py-2"
                  />
                  <h5>Provide More Guidance</h5>
                  <p className="pt-2 text-base">
                    New adopter of ROSA Brain struggled to understand how advanced features were work.
                    Their expectactions of how the application should react to their actions illustrated to us how mistleading the existing interface
                    is and that it does not adhere to modern UI/UX conventions.
                  </p>
                </div>
                <div>
                  <Image
                    src="/assets/images/beautifyUI.png"
                    alt="Paths to choose from"
                    width="144"
                    height="144"
                    className="mx-auto h-64 w-auto object-cover py-2"
                  />
                  <h5>Give it a Face Lift</h5>
                  <p className="pt-2 text-base">
                    Surgeons mentionned how dated the UI application looked. Hence, updates to the style sheet of the application are underway to
                    appeal to the next batch of surgeons currently being trained.
                  </p>
                </div>
              </div>
              <p className="text-center text-sm italic text-gray-400">
                Other features and improvements were identified that I cannot reveal at this time.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="mx-auto my-10 flex max-w-screen-xl flex-col gap-4 px-16 py-4 text-lg">
            <h3 className="text-center">Design Phase</h3>
            <h4>Establishing a new Design System</h4>
            <p>
              The orignal release was launched in 2008, so the existing UI application's design system is dated. An initiative was launched at the very
              start to align the new version of the ROSA application with the style of the orthopeadic products in Zimmer Biomet's existing robotic portfolio.
              This was the first time that a coordinated effort was made to document the existing design system of the Knee, Hip and Shoulder applications so as
              to be able to leverage them for the more modern Brain application.
            </p>

            <h4>Figma Mockups and Prototypes</h4>
            <p>
              Having learnt from previous projects, the team moved to using Figma and took full advantage of Figma's protyping feature to validate UI
              changes with the surgeons prior to implementation. This helped the team to drastically decrease the development time of a software feature
              due to our prototypes being better able to communicate the UI's desired behavior. Using Figma prototypes also allowed us to
              observe surgeons using the proposed designs without interference, leading to the quick identification of each design's weaknesses.

              Using Figma prototypes also greatly reduced the amount of information that tends to get lost in translation between product/design
              and the software team that is implementing the feature.
            </p>

            <h4>Periodic Releases & Exploratory Testing</h4>
            <p>
              Every quarter, a new release was presented to the design surgeons so that iterative feedback could be received.
              The system design team also put in place the habit of systematically performing non-regression and exploratory tests after each sprint to help to identify both design and technical debt.
            </p>

            <h4>Robotic Features</h4>
            <p>
              This project was the first opportunity that I had to influence robotic features.
              Close collaboration with the team in France that manufactures and maintains the robot is constantly required and poses a challenge for me from a technical perspective.
              I am continuously in the process of expanding my understanding of how our robotic controller works along with its intrinsic limits and potential risks.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto my-10 flex max-w-screen-xl flex-col gap-4 px-16 py-4 text-lg">
            <h3 className="text-center">Verification & Validation Testing</h3>
            <div className="grid grid-cols-3 border-2 bg-white py-6">
              <Image
                src="/assets/images/cucumberBDD.png"
                alt="Cucumber Automatic Testing Logo"
                width="200"
                height="200"
                className="mx-auto h-full object-cover"
              />
              <div className="col-span-2 content-center px-4">
                <h4 className="py-2">Establishing Automatic Testing Suite</h4>
                <p>
                  We are currently in the process of establishing the verifcation and validation strategy for the project.
                  One goal that the development team has is to put in place
                  {' '}
                  <span className="font-semibold text-pink-500">behavioural-driven development</span>
                  {' '}
                  and automatic testing of the front-end UI elements of the application.
                  I am currently actively working towards this objective along with our software lead.
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-16 py-4 text-lg">
            <h3 className="text-center">The Impact</h3>
            <p className="text-center">Only pre-market results are reported as the project is still ongoing...</p>
            <p className="pb-4 text-center text-gray-400">_______</p>
            <div className="flex flex-col gap-2 bg-gray-200 px-6 py-10 text-center">
              <p className="impactNumber text-pink-500">
                17
                <span className="impactPercent">%</span>
              </p>
              <p className="impactChange">expected DECREASE in </p>
              <p className="impactMetric">Patient Registration Time</p>
              <p className="impactChange pt-6">
                This is one the main objectives of the new product.
              </p>
            </div>
            <p className="pt-4 text-center italic text-gray-500">
              For confidentiality reasons I have omitted the actual values for these metrics.
            </p>
            <p className="pb-6 text-center text-gray-400">_______</p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto my-10 flex max-w-screen-xl flex-col gap-4 px-16 text-lg">
            <h3 className="text-center">What I've learnt, so far...</h3>
            <p>
              Unlike previous projects that I had worked on, this project was quite severely underfunded and was always lacking ressources.
              This brought about a significant challenge to the maintenance of the team's morale. In addition, I found that scrum teams that bridged
              two different time zones worked most efficiently when each member had at least one other person in their same craft working in their
              same time zone. My belief is that a team member's sense of belonging and team morale is boosted when members are able to brainstorm and
              troubleshoot problems together in person or at least in a live and interactive format.
            </p>
            <p>
              From a technical perspective, unlike previous projects, I was awarded the opportunity to own the definition and implementation of complex
              software and robotic features. Exposing me to the basics of robotics and the technical difficulties related to the practical implementation of
              these sub-systems. Working hand in hand with the software team allowed me to quickly identify flaws in my inital design proposals that from an
              implementation point of view were not ideal, or simply were not feasible.
            </p>
            <p>
              All in all, the entire team has achieved a great amount in the redesign of the existing product. I cannot wait to see how surgeons will react
              to the release of the new updated version of this beloved device.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}