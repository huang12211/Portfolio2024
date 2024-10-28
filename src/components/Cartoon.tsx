import Image from 'next/image';

const Cartoon = () => (
  <Image
    src="/assets/Home/CartoonElaineWave.png"
    alt="Cartoon"
    width={1024}
    height={1024}
    className="size-64 rounded-full border-8 border-teal-500 bg-teal-50 object-cover object-center p-4 shadow-xl sm:size-80 md:size-96 lg:size-[28rem] xl:size-[36rem]"
  />
);

export { Cartoon };
