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
    <div className={`flex w-screen min-h-screen ${styles}`} id={id}>
      {children}
    </div>
  );
}
