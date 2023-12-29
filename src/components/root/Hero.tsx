import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b pt-12">
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:col-span-2 xl:col-auto">
            Our team strives to be at the forefront of the AI revolution.
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8 text-muted-foreground">
              Our team consists of the following world renouned skills; Software
              Developers, AI Engineers, Data Scientists, Finance, Marketing and
              Sales.
            </p>
          </div>
          <Image
            src="/about1.avif"
            alt="people"
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
