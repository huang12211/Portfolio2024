// import { useTranslations } from 'next-intl';
// import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

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
              <h1 className="content-center text-center font-[Georgia] text-4xl font-black">MEMs for Tibial Mechanical-Axis Registration</h1>
              <h2 className="content-center text-center font-[Georgia] text-2xl font-black italic text-teal-500">
                A non-invasive way to register the mechanical axis of a tibia for Total Knee Arthroplasties
              </h2>
            </div>
            <div className="flex flex-col content-center gap-2 text-center">
              <p>
                One of the main pain points of all navigated surgical operations developped by Zimmer Biomet for different knee replacement surgeries
                are the use of pins to keep track of the tibia during surgery.
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
              To Fill in.
            </p>
            <ul className="list-outside list-disc pl-6 text-base italic">
              <li>To Fill In.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4">
            <h3 className="text-xl font-medium">My Role:</h3>
            <p className="text-base">
              To Fill In. Project Advocate.
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
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-black">Design Phase</h2>
            <h3 className="text-lg font-semibold">Mockups</h3>
            <p>
              To Fill in.
            </p>
            <h3 className="text-lg font-semibold">User Journeys & Personas</h3>
            <p>
              To Fill in.
            </p>
            <h3 className="text-lg font-semibold">Risks Analysis</h3>
            <p>
              To Fill in.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-bold">Verification & Validation Testing</h2>
            <h3 className="text-lg font-semibold">Verification Lead</h3>
            <p>
              To Fill in.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-bold">The Impact</h2>
            <p>
              To Fill in.
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
              To Fill in.
            </p>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-base">
            <h2 className="text-xl font-bold">What I learned</h2>
            <p>
              To Fill in.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
