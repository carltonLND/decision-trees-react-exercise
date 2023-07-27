interface RenderLeavesProps {
  validLeaves: string[];
  allLeaves: string[];
}

export default function RenderLeaves({
  validLeaves,
  allLeaves,
}: RenderLeavesProps): JSX.Element {
  const getElimatedClass = (leaf: string) =>
    !validLeaves.includes(leaf) ? "eliminated" : "";

  return (
    <div className="leaves">
      {allLeaves.map((l, i) => {
        return (
          <span className={getElimatedClass(l)} key={i + l}>
            {l}
          </span>
        );
      })}
    </div>
  );
}
