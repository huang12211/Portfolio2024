// import { useTranslations } from 'next-intl';
// import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

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
              <h1 className="content-center text-center font-[Georgia] text-4xl font-black">Elaine's Easecipes</h1>
              <h2 className="content-center text-center font-[Georgia] text-2xl font-black italic text-orange-400">
                A Journal of all of my Family's Favourite Food Recipes
              </h2>
            </div>
            <div className="flex flex-col content-center gap-2 text-center">
              <p>
                The COVID pandemic had made it clear that Zimmer Biomet needed to pivot to use re-usable synthetic models in place of cadavers for surgeon training sessions.
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
              Instead of purchasing models from existing sythetic model manufacturers, that didn't meet all of our needs, an initiative was launched to  develop
              the technology that would be able to address the needs that the existing models in the market were unable to meet.
            </p>
            <ul className="list-outside list-disc pl-6 text-base italic">
              <li>To Fill In.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4">
            <h3 className="text-xl font-medium">My Role:</h3>
            <p className="text-base">
              To Fill In. Grants, Partnership Contract Agreements, Reporting. I acted as the main liason between Concordia University's
              Research Lab and Zimmer Biomet.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-semibold">Business Context</h2>
            <p>
              To Fill In.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-black">Early Insights from the Field</h2>
            <h4 className="text-lg font-semibold">Customer Interviews</h4>
            <p>
              To Fill In.
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
              Qualitative data was collected at regular phases of the project. Sessions were aranged so that groups were assigned to each surgeon,
              to mimic the actual use of the protoypes in an operating room. The aim was to observe users' natural interactions with the product,
              validate hypotheses and identify potential risks as well as areas of opportunity for the design of both the software and hardware.
            </p>
            <div>
              <h3 className="pb-2 pt-4 text-base font-medium">How research was compiled and shared</h3>
              <p>
                Results were summarized into feedback docs and were stack ranked quantitatively. Action items generated from the insights were then
                presented to key stakeholders and decision makers. From there, the team would agree on the direction of the next
                iteration of prototypes given the overall timeline of the project.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-black">Design Phase</h2>
            <h3 className="text-lg font-semibold">Mockups</h3>
            <p>
              During the design phase, I worked directly with Frank, one of our experienced UI designers.
              I would provide him with wireframes that he would then craft into beautiful mock-ups in Qt.
              After every user testing session, mock-ups would undergo a redesign by Frank, driven by the new
              insights obtained from our users.
            </p>
            <h3 className="text-lg font-semibold">User Journeys & Personas</h3>
            <p>
              I mapped out user journeys and associated personas to illustrate every type of surgeon's preferred surgical techniques.
              They served as invaluable reference material for the mechanical team who had little contact with surgeons. These
              documents played a key role when it came time to designing the instruments and their interactions.
            </p>
            <h3 className="text-lg font-semibold">Risks Analysis</h3>
            <p>
              Throughout the design phase, I along with the System Design team of 8 worked together to ensure that all
              mechanical, sofware, and cybersecurity risks were mitigated as much as possible. MAUDE analysis, litterature reviews,
              threat analysis, and Failure Mode and Effects Analysis, were some of the tools used.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-bold">Verification & Validation Testing</h2>
            <h3 className="text-lg font-semibold">Verification Lead</h3>
            <p>
              To ensure the safety of the design and manufacturing of the final product, I along with five other test leads
              distributed the testing responsibilities. I was in charge of leading the accuracy, imaging compatibilty, biocompatibility
              and durability of the instruments, and the verification of the clinical application.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-bold">The Impact</h2>
            <p>
              Only pre-market results are reported as the project was discontinued prior to its official launch in February of 2022.

            </p>
            <p className="pb-4 text-center text-gray-400">_______</p>
            <div className="flex flex-col gap-2 bg-gray-200 px-6 py-10 text-center">
              <h1 className="text-7xl font-black text-sky-500">
                7
                <span className="text-4xl">%</span>
              </h1>
              <h4>INCREASE in </h4>
              <h2 className="text-3xl">Clinical Accuracy of Pedicle Screw Placement</h2>
              <p className="pt-2">
                This was
                <span className="font-bold">the most important metric for surgeons</span>
                , making it the litmus test for the quality of the product.
              </p>
            </div>
            <div className="flex flex-col gap-2 bg-gray-200 px-6 py-10 text-center">
              <h1 className="text-7xl font-black text-sky-500">
                14.6
                <span className="text-4xl">%</span>
              </h1>
              <h4>DECREASE in </h4>
              <h2 className="text-3xl">Patient's Exposure to Radiation</h2>
              <p className="pt-2">
                <span className="font-bold">Surgical team</span>
                {' '}
                also benefitted from reduced exposure to radiation.
              </p>
            </div>
            <div className="flex flex-col gap-2 bg-gray-200 px-6 py-10 text-center">
              <h1 className="text-7xl font-black text-sky-500">
                2
                <span className="text-4xl"> mins</span>
              </h1>
              <h4>FASTER at </h4>
              <h2 className="text-3xl">Implanting Pedicle Screws</h2>
              <p className="pt-2">
                The live feedback allowed surgeons to be
                <span className="font-bold"> more confident</span>
                {' '}
                in their movements
              </p>
            </div>
            <p className="pt-4 text-center italic text-gray-500">
              For confidentiality reasons I have omitted the actual values for these metrics.
            </p>
            <p className="pb-6 text-center text-gray-400">_______</p>
            <p className="text-gray-500">
              The product was never released to market due to an executive business decision to create a spin-off all of Zimmer Biomet's
              spinal and dental products to "ZimVie" (now HighRidge Medical). The newly created spin-off no longer had the required software
              and field-support ressources to be able to support the launch of a navigation system into the market so the project was terminated in February of 2022.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-bold">What I learned</h2>
            <p>
              This was a relatively fast-paced project given the scope and industry in which I was operating in. Our marketing director
              at the time, Irena, always mentionned how impressed she was at the speed at which we were moving compared to previous Medtech
              companies that she had worked at. Though a lot went right in this project, there were also areas for improvement. I like to
              reflect on the success and failures of every project I work in so that I can learn from them and apply these lessons in the future.
            </p>
            <p>
              This project highlighted to me that
              {' '}
              <span className="font-bold">small agile teams</span>
              , once having experienced the storming phase,
              {' '}
              <span className="font-bold">work great together</span>
              .
              Despite most of this project having been completed during COVID when all team members had to work from home, having a smaller team allowed for a certain amount of flexibility in how each scrum
              team organized themselves to collaborate and get the work done. My scrum team set expectations that those in Canada would start work 2 hours earllier than the usual 9-5 and that those in France would
              work later, allowing the team to have more time to collaborate online.
            </p>
            <p>
              I also learned that
              {' '}
              <span className="font-bold">periodically adding ressources to the team is ideal over suddenly doubling the team</span>
              . Acting as PO proxy for a scrum team
              where 50% of the individuals were new hires that were added to the project, made me learn the importance of having a robust and standardized onboarding process, but also the huge
              time sink that onboarding a large cohort has on the burndown of a project.
            </p>
            <p>
              Despite having attained the deadlines that were set before us, we could have avoided a lot of stress near the end of the project had the
              {' '}
              <span className="font-bold">
                estimate of
                time and ressources required
              </span>
              {' '}
              to complete the remaining work was re-evaluated mid-way through the project
              {' '}
              <span className="font-bold">
                by the team members who were responsible
                for delivering those features
              </span>
              . This put a lot of pressure on the team to deliver work as fast as possible, resulting in certain problematic dependecies between features being
              overlooked which were not caught until the very end.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
