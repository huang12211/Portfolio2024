import Image from 'next/image';

const HomeSectionImg = (props: {
  image_src: string;
  image_alt: string;
}) => {
  return (
    <>
      <div className="flex h-48 w-72 max-w-[95%] shrink justify-center overflow-hidden rounded-3xl border-gray-700 bg-purple-300 md:h-64">
        <Image
          src={props.image_src}
          alt={props.image_alt}
          width="1024"
          height="1024"
          className="h-full object-cover"
        />
      </div>
    </>
  );
};

export { HomeSectionImg };
