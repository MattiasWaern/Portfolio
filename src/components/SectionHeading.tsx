export function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <>
      <h2>{title}</h2>
      {intro && <p className="mu intro">{intro}</p>}
    </>
  );
}
