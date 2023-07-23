export default function SectionContainer({
  children,
  id,
  styles,
}: {
  children: React.ReactNode;
  id?: string;
  styles?: string;
}) {
  return (
    <section
      className={`flex flex-col even:flex-col-reverse  py-7 lg:py-0  lg:flex-row lg:even:flex-row  min-h-screen ${styles}`}
      id={id}
    >
      {children}
    </section>
  );
}
