'use client';
import Image from 'next/image';
import Link from 'next/link';

const DesignProjectCard = (props: {
  card_image_src: string;
  image_alt: string;
  title: string;
  subtitle: string;
  page_link: string;
  bg_color: string;
  alignment: string;
}) => {
  return (
    <>
      <Link
        href={props.page_link}
      >
        <div
          className="size-full max-w-screen-xl overflow-hidden rounded-xl shadow-lg duration-150 hover:scale-105 hover:shadow-xl"
          style={{ backgroundColor: props.bg_color, justifySelf: props.alignment }}
        >
          <div className="mx-12 my-6 flex flex-col md:ml-6 md:mr-0">
            <div className="flex w-full flex-col content-center gap-2 px-2">
              <p className="text-3xl font-bold">
                {props.title}
              </p>
              <p className="text-xl">
                {props.subtitle}
              </p>
            </div>
            <div className="my-4 h-96 w-auto py-2 md:pl-2">
              <Image
                src={props.card_image_src}
                alt={props.image_alt}
                width="2300"
                height="1655"
                className="mx-auto h-[36rem] w-auto rounded-t-xl object-cover md:ml-[5%] md:rounded-tl-xl md:object-left-top"
              />
            </div>
          </div>

        </div>
      </Link>
    </>
  );
};

export { DesignProjectCard };
