import Image from 'next/image';

const Cartoon = () => (
  <Image
    src="/assets/Home/CartoonElaineWave.png"
    alt="Cartoon"
    width={1024}
    height={1024}
    className="size-80 rounded-full border-8 border-teal-500 bg-teal-50 object-cover p-4 shadow-xl md:size-[26rem]"
  />
);

export { Cartoon };
