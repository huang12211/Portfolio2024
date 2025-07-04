'use client';
import Image from 'next/image';

const ProjectCardInProgress = (props: {
  card_image_src: string;
  image_alt: string;
  title: string;
}) => {
  return (
    <>
      <div className="group relative h-80 w-72 rounded-xl shadow-lg duration-150 hover:scale-105 hover:shadow-xl">
        <div className="content-center group-hover:opacity-20">
          <div className="z-2 h-64 overflow-hidden p-2">
            <Image
              src={props.card_image_src}
              alt={props.image_alt}
              width="144"
              height="144"
              className="mx-auto h-64 w-auto object-cover"
            />
          </div>
          <div className="z-2 my-2 h-12 w-auto content-center px-2 text-base font-bold">
            <p className="text-center">{props.title}</p>
          </div>
        </div>

        <div className="group-hover:z1 absolute inset-0 hidden h-80 w-72 group-hover:inline">
          <Image
            src="/assets/Icons - General/constructionCone.png"
            alt="construction cone"
            width="225"
            height="225"
            className="mx-auto h-56 w-auto object-cover"
          />
          <p className="z-1 -mt-10 w-auto place-self-center text-3xl font-black">
            In Progress
          </p>
        </div>
      </div>
    </>
  );
};

export { ProjectCardInProgress };
