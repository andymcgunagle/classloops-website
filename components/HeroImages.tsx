import Image from "next/image";

export default function HeroImages() {
  return (
    <div className="w-full animate-slide-up grid grid-cols-2 items-center gap-4 md:grid-cols-1 lg:bg-gray-500 lg:rounded-full lg:h-96 lg:w-96">
      <div className="border-[.5rem] border-gray-900 rounded-md h-fit shadow-xl z-50 lg:w-96 lg:-translate-x-16 lg:translate-y-4">
        <Image
          src="/classloops-screenshot.png"
          alt="classloops screenshot"
          layout="responsive"
          objectFit="cover"
          width={1909}
          height={922}
        />
      </div>
      <div className="h-fit rounded-xl shadow-xl z-0 lg:w-96 lg:translate-x-20 lg:-translate-y-8">
        <Image
          src="/exercise-class.jpg"
          alt="exercise class"
          layout="responsive"
          objectFit="cover"
          width={5900}
          height={3933}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};
