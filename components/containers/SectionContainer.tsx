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
      className={`flex flex-col lg:flex-row min-h-screen ${styles}`}
      id={id}
    >
      {children}
    </section>
  );
}
