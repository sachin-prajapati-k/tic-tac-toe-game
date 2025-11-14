export default function CalculateWinnert({ nextSquare }) {
  const Winlines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
  ];

  return (
    <>
      {Winlines.map(([a, b, c]) => {
        if (
          nextSquare[a] &&
          nextSquare[a] === nextSquare[b] &&
          nextSquare[a] === nextSquare[c]
        ) {
          return nextSquare[a];
        }
        return null;
      })}
    </>
  );
}
