import Image from 'next/image';

const ReactLogo = () => (
  <Image
    src="/assets/Icons - General/reactLogo.png"
    alt="React Logo"
    width={920}
    height={920}
    className="h-8 w-auto md:h-9"
  />
);

export { ReactLogo };
