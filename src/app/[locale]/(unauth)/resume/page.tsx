// import { PDFWindow } from '@/components/PDFWindow';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Resume',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Resume(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <div className="mx-auto max-w-screen-xl px-6 pb-4 pt-16 md:px-16">
      <div>
        {/* <PDFWindow
          pdf_path="/assets/files/Elaine_Huang_CV.pdf"
        /> */}
        <div className="mx-0 pb-4 md:mx-10">
          <div className="flex flex-col gap-4 md:shrink md:flex-row md:justify-between md:gap-2">
            <h1 className="flex shrink flex-nowrap place-content-start text-left text-4xl uppercase md:text-5xl lg:text-5xl xl:text-6xl">Elaine Huang</h1>
            <div className="flex shrink flex-col gap-2">
              <div className="resumeSectionContent flex shrink items-center gap-2">
                <Image
                  src="/assets/Icons - General/emailIcon.png"
                  alt="Email logo"
                  width={1024}
                  height={1024}
                  className="size-6 w-auto rounded object-cover lg:size-8 lg:rounded-lg"
                />
                <p>huang12211@gmail.com</p>
              </div>
              <div className="resumeSectionContent flex shrink items-center gap-2">
                <Image
                  src="/assets/Icons - General/linkedinIcon.png"
                  alt="LinkedIn Logo"
                  width={1024}
                  height={1024}
                  className="size-6 w-auto rounded object-cover lg:size-8 lg:rounded-lg"
                />
                <a
                  href="https://www.linkedin.com/in/elaine-y-huang/"
                  target="_blank"
                  className="text-sky-600 hover:underline"
                >
                  <p>https://www.linkedin.com/in/elaine-y-huang/</p>
                </a>
              </div>
              <div className="resumeSectionContent flex shrink items-center gap-2">
                <Image
                  src="/assets/Icons - General/github.png"
                  alt="Github Logo"
                  width={230}
                  height={230}
                  className="size-6 w-auto rounded object-cover lg:size-8 lg:rounded-lg"
                />
                <a
                  href="https://github.com/huang12211/"
                  target="_blank"
                  className="text-sky-600 hover:underline"
                >
                  https://github.com/huang12211/
                </a>
              </div>
            </div>
          </div>
          <div className="resumeSectionContent">
            <p className="resumeSectionTitle">Profile</p>
            <p>
              Results-driven
              {' '}
              <span className="font-medium text-teal-600">Senior Product Designer </span>
              {' '}
              with a strong foundation in
              {' '}
              <span className="font-medium text-teal-600">user-centered design</span>
              {' '}
              and a proven ability to deliver actionable insights that drive product
              {' '}
              <span className="font-medium text-teal-600">innovation </span>
              in the healthcare technology industry.
              Known for delivering products for a diverse user population, establishing relations with industry experts, and fostering cross-functional collaboration to create value-driven solutions within a
              {' '}
              <span className="font-medium text-teal-600">highly regulated </span>
              environment.
            </p>

            <p className="resumeSectionTitle">Work Experience</p>
            <div className="entryDate">
              <p>
                <span className="company">Zimmer Biomet</span>
                , Montreal QC
              </p>
              <p>Sep 2019 - Present</p>
            </div>
            <p className="jobTitle">Senior Systems Desginer (Product)</p>
            <ul className="jobDescription">
              <li>Lead R&D and shipped 2 novel image-based robotics/navigation products for brain, spine and orthopaedic surgery.</li>
              <li>Navigate FDA, CE and other regulatory environments for product certification and deployment.</li>
              <li>Direct user research to inform product decisions, balancing user needs with technical feasibility and risk.</li>
              <li>Operate within a complex remote environment with our multinational team in English & French.</li>
            </ul>
            <p className="jobTitle">Innovation Program Coordinator</p>
            <ul className="jobDescription">
              <li>Fostered innovation in a 200-person R&D department, launching projects with universities, clinicians and hospitals.</li>
              <li>Initiated market research, outreach and created proposals (including AI) that defined upcoming R&D roadmaps.</li>
              <li>Oversaw the rapid prototyping of an AR total knee arthroplasty surgery device for which a patent was filed, and 100% investment approval from the board of directors was secured.</li>
            </ul>

            <div className="entryDate">
              <p>
                <span className="company">Baylis Medical Company</span>
                , Toronto ON
              </p>
              <p> Jan 2018 - Aug 2018</p>
            </div>
            <p className="jobTitle">Research & Development Engineering Associate</p>
            <ul className="jobDescription">
              <li>Designed, prototyped and analyzed performance tests for a medical device that treats atrial fibrillation.</li>
            </ul>

            <p className="resumeSectionTitle">Education & Certifications</p>
            <div className="entryDate mb-4">
              <p className="font-bold">Applied Data Science Program: Leveraging AI for Effective Decision-Making</p>
              <p className="text-teal-600">MIT Professional Education</p>
            </div>
            <div className="entryDate">
              <p>
                <span className="font-bold">Bachelor of Applied Science</span>
                , in Biomedical Engineering, Co-op
              </p>
              <p className="text-teal-600">University of Waterloo, ON</p>
            </div>
            <p className="jobTitle">Research & Development Engineering Associate</p>
            <ul className="jobDescription">
              <li>Graduated with Distinction (GPA: 3.87/4.00)</li>
              <li>Baylis Medical Award (Bonesai - Capstone Design Project)</li>
            </ul>

            <p className="resumeSectionTitle">Skills</p>
            <div className="grid gap-2 md:grid-cols-2">
              <p>
                <span className="font-bold">Languages: </span>
                native English & French; basic Chinese (Mandarin)
              </p>
              <p>
                <span className="font-bold">UI, UX: </span>
                Figma
              </p>
              <p>
                <span className="font-bold">Programming Languages: </span>
                Python, SQL, Javascript, Typescript, HTML, CSS, C#, C++, C
              </p>
              <p>
                <span className="font-bold">3D Modelling: </span>
                Solidworks, AutoCAD
              </p>
              <p>
                <span className="font-bold">Project Management: </span>
                Agile, JIRA, Confluence
              </p>
            </div>

            <p className="resumeSectionTitle">Projects & Publications</p>
            <div className="entryDate">
              <p className="font-bold">Facial Emotion Detection Using CNNs and Transfer Learning Architectures</p>
              <p>Jun 2024</p>
            </div>
            <p className="mb-4 text-teal-600">MIT Leveraging AI for Effective Decision-Making Course</p>

            <div className="entryDate">
              <p className="font-bold">Development of Cuncussion Evaluation Tools Using Life-Like VR Environments</p>
              <p>HCI International 2018</p>
            </div>
            <p className="text-teal-600">Sawires, Y ., Huang, E., Gomes, A., Fernandes, K. & Wang, D. Development of Concussion Evaluation Tools Using Life-Like Virtual Reality Environments. in 326–333 (2018). doi:10.1007/978-3-319-92279-9_44</p>
          </div>
        </div>
        {/* <Image
          src="/assets/images/resumeImg.png"
          alt="resume"
          width="1218"
          height="1528"
          className="mx-auto h-auto w-[95%] object-cover"
        /> */}
        {/* <iframe
          src="/assets/files/Elaine_Huang_CV.pdf"
          title="resume document"
          width="200"
          height="200"
          className="mx-auto"
        /> */}
        <Link
          href="/assets/files/Elaine_Huang_CV.pdf"
        >
          <div className="mx-auto my-6 flex w-3/5 items-center justify-center gap-2 rounded-full border-4 border-gray-700 px-6 py-2 text-base shadow-xl duration-150 hover:scale-110 hover:bg-teal-400 hover:font-bold md:w-[45%] md:text-xl">
            <p>Download CV </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mb-2 inline size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
