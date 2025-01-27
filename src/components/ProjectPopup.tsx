import Image from 'next/image';

import { ProjectPopupContent } from './ProjectPopupContent';

const ProjectPopup = (props: {
  trigger: boolean;
  setTrigger: (open: boolean) => void;
  project_title: string;
  image_src: string;
  image_alt: string;
  // children: React.ReactNode;
}) => {
  if (props.trigger === true) {
    return (
      <>
        <div className="fixed right-0 top-0 h-screen w-full bg-gray-700 bg-opacity-50">
          <div className="max-h-5/6 absolute left-1/2 top-1/2 -ml-[40%] -mt-[60%] w-5/6 overflow-hidden rounded-2xl border-2 bg-white shadow-lg md:left-[50%] md:top-[63%] md:-ml-80 md:-mt-96 md:h-160 md:max-h-[650px] md:w-160">
            <div className="relative grid h-full grid-cols-5 gap-6 overflow-y-auto py-4 pl-4 pr-8">
              <Image
                src={props.image_src}
                alt={props.image_alt}
                width={360}
                height={360}
                className="self-top col-span-2 object-cover py-2"
              />
              <div className="col-span-3">
                <p className="text-base font-black md:text-xl">{props.project_title}</p>
                <div className="text-xs md:text-base">
                  {/* {props.children} */}
                  <ProjectPopupContent
                    project_title={props.project_title}
                  />
                </div>
              </div>
              <div className="absolute right-4 top-2">
                <button onClick={() => props.setTrigger(false)}>X</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return ('');
  }
};

export { ProjectPopup };
