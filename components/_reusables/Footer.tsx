import LogoAndName from "./LogoAndName";

export default function Footer({ }) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="content-wrapper flex flex-col space-y-4 md:space-y-0 md:flex-row items-start md:justify-between">
        <LogoAndName />
        <div className="flex flex-col space-y-4 md:items-end">
          <a href="https://www.andymcgunagle.com/" target="_blank" rel="noreferrer">
            Created by Andy McGunagle
          </a>
          <a href="https://www.linkedin.com/in/andy-mcgunagle/" target="_blank" rel="noreferrer">
            Andy&apos;s LinkedIn
          </a>
          <a href="https://github.com/andymcgunagle" target="_blank" rel="noreferrer">
            Andy&apos;s GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
