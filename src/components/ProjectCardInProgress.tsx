'use client';
import Image from 'next/image';

const ProjectCardInProgress = (props: {
  card_image_src: string;
  popup_image_src: string;
  image_alt: string;
  title: string;
}) => {
  return (
    <>
      <button className="relative h-72 w-60 rounded-xl shadow-lg duration-150 hover:scale-105 hover:shadow-xl">
        <div className="hover:opacity-30">
          <div className="h-56 w-60 overflow-hidden p-2">
            <Image
              src={props.card_image_src}
              alt={props.image_alt}
              width="144"
              height="144"
              className="mx-auto h-56 w-auto object-cover"
            />
          </div>
          <div className="my-2 h-12 w-full content-center px-2 text-sm font-bold">
            <p>
              {props.title}
            </p>
          </div>
          <div className="absolute top-0 -z-10 h-72 w-60 hover:z-30">
            <Image
              src="/assets/Icons - General/constructionCone.png"
              alt="construction cone"
              width="225"
              height="225"
              className="mx-auto h-56 w-auto object-cover"
            />
            <h1 className="-mt-[10%]">In Progress</h1>
          </div>
        </div>
      </button>
    </>
  );
};

export { ProjectCardInProgress };
