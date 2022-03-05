export default function Section({
  additionalSectionStyles,
  additionalContentWrapperStyles,
  children,
}: SectionProps) {
  return (
    <section
      className={`${additionalSectionStyles}`}
    >
      <div
        className={`content-wrapper ${additionalContentWrapperStyles}`}
      >
        {children}
      </div>
    </section>
  );
};

interface SectionProps {
  additionalContentWrapperStyles?: string,
  additionalSectionStyles?: string,
  children: JSX.Element | JSX.Element[],
};
