import Image from "next/image";

export default function HeroImages() {
  return (
    <div className="relative animate-slide-up">
      <div className="hidden lg:block h-96 w-96 shadow-2xl">
        <Image src="/high-five.jpg" alt="high five" layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>
      <div className="hidden lg:block h-64 w-64 shadow-2xl absolute top-72 right-64">
        <Image src="/graph.jpg" alt="high five" layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>
    </div>
  );
};
