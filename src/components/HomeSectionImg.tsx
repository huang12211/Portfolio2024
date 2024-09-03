import Image from 'next/image';

const HomeSectionImg = (props: {
  image_src: string;
  image_alt: string;
}) => {
  return (
    <>
      <div className="size-56 overflow-hidden rounded-3xl border-gray-700">
        <Image
          src={props.image_src}
          alt={props.image_alt}
          width="1024"
          height="1024"
          className="h-full content-center object-cover"
        />
      </div>
    </>
  );
};

export { HomeSectionImg };
