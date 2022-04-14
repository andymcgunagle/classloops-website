import Link from "next/link";

export default function LogoAndName() {
  return (
    <Link href="/" passHref>
      <div className="flex items-center gap-0 cursor-pointer">
        <span className="material-icons-round font-10">
          loop
        </span>
        <h3 className="font-10 font-weight-6 color-brand">
          ClassLoops
        </h3>
      </div>
    </Link>
  );
};
