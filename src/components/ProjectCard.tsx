import Image from 'next/image';

const ProjectCard = (props: {
  image_src: string;
  image_alt: string;
  title: string;
}) => {
  return (
    <>
      <div className="h-52 w-44 rounded shadow duration-150 hover:scale-105">
        <div className="h-36 w-44 overflow-hidden p-2">
          <Image
            src={props.image_src}
            alt={props.image_alt}
            width="144"
            height="144"
            className="h-36 w-auto content-center object-cover"
          />
        </div>
        <div className="my-2 h-12 w-full content-center px-2 text-sm font-bold">
          <p>
            {props.title}
          </p>
        </div>
      </div>
    </>
  );
};

export { ProjectCard };
