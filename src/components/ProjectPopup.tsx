import Image from 'next/image';

const ProjectPopup = (props: {
  trigger: boolean;
  setTrigger: (open: boolean) => void;
  project_title: string;
  image_src: string;
  image_alt: string;
  children: React.ReactNode;
}) => {
  if (props.trigger === true) {
    return (
      <>
        <div className="fixed right-0 top-0 h-screen w-full bg-gray-700 bg-opacity-50">
        </div>
        <div className="md:-mt-70 absolute left-[50%] top-[50%] m-0 -ml-52 -mt-60 h-120 w-104 border-2 bg-white shadow-lg md:-ml-80 md:h-140 md:w-160">
          <div className="relative grid h-full grid-cols-5 gap-4 px-6 py-4">
            <Image
              src={props.image_src}
              alt={props.image_alt}
              width={360}
              height={360}
              className="col-span-2 self-center object-cover"
            />
            <div className="col-span-3">
              <h1 className="text-base font-black md:text-xl">{props.project_title}</h1>
              <div className="text-xs md:text-base">
                {props.children}
              </div>
            </div>
            <div className="absolute right-4 top-2">
              <button onClick={() => props.setTrigger(false)}>X</button>
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
