import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'NaviScout',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Design(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('NaviScout');

  return (
    <>
      <div className="pb-4">
        <div className="bg-gray-200">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-6 p-16">
            <div className="flex flex-col gap-2">
              <h1 className="content-center text-center font-[Georgia] text-4xl font-black">{t('page_title')}</h1>
              <h2 className="content-center text-center font-[Georgia] text-2xl font-black italic text-sky-500">
                An Spine Navigation System Designed for Out-patient Centers
              </h2>
            </div>
            <div className="flex flex-col content-center gap-2 text-center">
              <p>
                In 2019, Zimmer Biomet launched a new initiative to support their existing catalog of spine instruments and implants (now HighRidge Medical). Brought in as team member #4, I played a key part in this ambitious
                project to create a compact navigation system to guide surgeons in placing their pedicle screws and cages into the spine.
              </p>
              <p className="text-lg italic text-gray-500">
                To comply with my non-disclosure agreement, I have omitted confidential information in this case study.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 px-16 py-6 text-lg">
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4">
            <h4>The Goal:</h4>
            <p className="text-lg">
              Zimmer Biomet's Spine portfolio was loosing more and more market share to its competitors. The opportunity to own the
              out-patient market needed to be acted upon. In order to be marketable, the final product needed to be:
            </p>
            <ul className="list-outside list-disc pl-6 text-base italic">
              <li>
                As
                <span className="text-sky-500"> accurate</span>
                {' '}
                as the most sophisticated navigation systems on the market
              </li>
              <li>
                <span className="text-sky-500">Simple and Fast</span>
                {' '}
                to minimize the time a patient was under anesthesia
              </li>
              <li>
                <span className="text-sky-500">Compact</span>
                {' '}
                to fit inside smaller operating rooms and travel between clinics renting it
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4">
            <h4>My Role:</h4>
            <p className="text-lg">
              I wore many hats over the course of this project, such as Proxy Product Owner, UX Researcher, Regulatory Analyst, and Testing Lead (SW, HW, Biocompatibility and Imaging) adapting to the needs of the project as they arose.
              I saw the project through from the kick-off meeting, to the successful 510(k) submission in September of 2021 immediately prior to launch.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-16 py-10 text-base">
            <h3 className="text-center">Business Context</h3>
            <p>
              The most common spinal procedures performed in out-patient centers at the time were spinal fusions to treat
              degenerative spinal conditions. This treatment involves the implantation of pedicle screws, cages and rods to
              decompress the disc and immobilize the spine. At the time, spinal fusions were performed using conventional surgery techniques
              which involved constant imaging, exposing both the patient and the surgeon to high amounts of radiation. With a navigation device,
              this risk to the patient's and surgeon's long-term health is greatly reduced. However, at the time, all navigation devices were
              extremely expensive and outside the budget of most out-patient clinics.
            </p>
          </div>
        </div>
        <div className="mx-auto mb-10 max-w-screen-xl">
          <div className="mx-16 flex h-80 bg-sky-100 py-8">
            <Image
              src="/assets/images/NaviScoutSystem.png"
              alt="NaviScout System"
              width={1777}
              height={773}
              className="mx-auto h-full w-auto max-w-min object-cover"
            />
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-16 py-10 text-base">
            <h3 className="text-center">Early Insights from the Field</h3>
            <h4>Customer Interviews</h4>
            <p>
              At the outset, the team didn't have a clear vision of what features were essential to surgeons and surgical staff in out-patient clinics.
              So we ran multiple user interviews to identify what their needs were. Three key insights were revealed which became part of the main objectives
              that the design optimized for.
            </p>
            <div className="grid grid-cols-2 gap-8 py-6 md:grid-cols-3">
              <div>
                <Image
                  src="/assets/images/ZiehmVision.png"
                  alt="Ziehm Vision RFD Imaging System"
                  width={565}
                  height={597}
                  className="mx-auto h-80 w-auto object-cover py-2"
                />
                <h3 className="text-base font-medium">Leverage the existing equipment.</h3>
                <p className="pt-2 text-sm">
                  Surgeons already had the imaging equipment to perform conventional surgery. They therefore expected the product to work
                  with the equipment that they already had on-hand.
                </p>
              </div>
              <div>
                <Image
                  src="/assets/images/InstrumentHandoff.jpg"
                  alt="Insrument Handoff"
                  width={565}
                  height={597}
                  className="mx-auto h-80 w-auto object-cover py-2"
                />
                <h3 className="text-base font-medium">Adapt to preferred surgical workflows</h3>
                <p className="pt-2 text-sm">
                  Surgeons wanted a system and set of instruments that did not interfere with their existing surgical techniques.
                </p>
              </div>
              <div>
                <Image
                  src="/assets/images/BackTable.jpg"
                  alt="Cluttered OR Back Table"
                  width={565}
                  height={597}
                  className="mx-auto h-80 w-auto object-cover py-2"
                />
                <h3 className="text-base font-medium">Increase efficiency in the OR</h3>
                <p className="pt-2 text-sm">
                  Operating room staff wanted a product that allowed them to better anticipate potential needs of the surgeon.
                </p>
              </div>
            </div>

            <h4>User Testing</h4>
            <div>
              <p>
                Qualitative data was collected at regular phases of the project. Sessions were aranged so that groups were assigned to each surgeon,
                to mimic the actual use of the protoypes in an operating room. The aim was to observe users' natural interactions with the product,
                validate hypotheses and identify potential risks as well as areas of opportunity for the design of both the software and hardware.
              </p>
              <Image
                src="/assets/images/LikertScale.png"
                alt="Likert Scale"
                width={757}
                height={290}
                className="mx-auto -mb-14 -mt-6 h-56 w-auto max-w-full object-cover"
              />
            </div>
            <div>
              <h5 className="pb-2 pt-4 text-base font-semibold">How research was compiled and shared</h5>
              <p>
                Results were summarized into feedback docs and were
                {' '}
                <span className="font-medium italic">stack ranked</span>
                {' '}
                quantitatively.
                These results were then fed through a
                {' '}
                <span className="font-medium italic">weighted decision matrix</span>
                {' '}
                with input from
                stakeholders which informed which features to prioritize devleopment for. The final list of action items generated
                from the insights were then presented to key stakeholders and decision makers. From there, the team would agree on the
                direction of the next iteration of prototypes given the overall timeline of the project.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-16 py-10 text-base">
            <h3 className="text-center">Design Phase</h3>
            <h4>Mockups</h4>
            <p>
              During the design phase, I worked directly with Frank, one of our experienced UI designers.
              I would provide him with wireframes that he would then craft into beautiful mock-ups in Qt.
              After every user testing session, mock-ups would undergo a redesign by Frank, driven by the new
              insights obtained from our users.
            </p>
            <h4>User Journeys & Personas</h4>
            <p>
              I mapped out user journeys and associated personas to illustrate every type of surgeon's preferred surgical techniques.
              They served as invaluable reference material for the mechanical team who had little contact with surgeons. These
              documents played a key role when it came time to designing the instruments and their interactions.
            </p>
            <div className="overflow-x-auto rounded-lg border-2">
              <Image
                src="/assets/images/screwsFlowFull.png"
                alt="pedicle screw flow page"
                width="11088"
                height="1419"
                className="h-96 min-w-fit overflow-visible object-cover object-left"
              />
            </div>
            <h4>Risks Analysis</h4>
            <p>
              Throughout the design phase, I along with the System Design team of 8 worked together to ensure that all
              mechanical, sofware, and cybersecurity risks were mitigated as much as possible. MAUDE analysis, litterature reviews,
              threat analysis, and Failure Mode and Effects Analysis, were some of the tools used.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-16 py-10 text-base">
            <h3 className="text-center">Verification & Validation Testing</h3>
            <h4>Verification & Validation Lead</h4>
            <p>
              To ensure the safety of the design and manufacturing of the final product, I along with 4 other test leads
              distributed the testing responsibilities. I was in charge of leading the imaging compatibilty, and verification of the performance
              of the navigated instruments and the clinical application. On the instruments side, there were no available biocompatibility experts
              to support our project, so I volunteered to undergo the required training in my personal time and acted as the biocompatibility testing
              subject matter expert for the project.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-16 py-10 text-base">
            <h3 className="text-center">The Impact</h3>
            <p>
              Only pre-market results are reported as the project was discontinued prior to its official launch in February of 2022.

            </p>
            <p className="pb-4 text-center text-gray-400">_______</p>
            <div className="flex flex-col gap-2 bg-gray-200 px-6 py-10 text-center">
              <p className="impactNumber text-sky-500">
                7
                <span className="impactPercent">%</span>
              </p>
              <p className="impactChange">INCREASE in </p>
              <p className="impactMetric">Accuracy of Pedicle Screw Placement</p>
              <p className="impactChange pt-6">
                This was
                <span className="font-bold"> the most important metric for surgeons</span>
                , making it the litmus test for the quality of the product.
              </p>
            </div>
            <div className="flex flex-col gap-2 bg-gray-200 px-6 py-10 text-center">
              <p className="impactNumber text-sky-500">
                14.6
                <span className="impactPercent">%</span>
              </p>
              <p className="impactChange">DECREASE in </p>
              <p className="impactMetric">Patient's Exposure to Radiation</p>
              <p className="impactChange pt-6">
                <span className="font-bold">Surgical team</span>
                {' '}
                also benefited from reduced exposure to radiation.
              </p>
            </div>
            <div className="flex flex-col gap-2 bg-gray-200 px-6 py-10 text-center">
              <p className="impactNumber text-sky-500">
                2
                <span className="impactPercent"> mins</span>
              </p>
              <p className="impactChange">FASTER at </p>
              <p className="impactMetric">Implanting Pedicle Screws</p>
              <p className="impactChange pt-6">
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
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-16 py-10 text-base">
            <h3 className="text-center">Lessons Learnt</h3>
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
