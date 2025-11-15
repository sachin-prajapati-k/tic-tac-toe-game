export default function CalculateWinnert(squares?: (string | null)[]) {
  if (!squares) return null; // <-- Prevent crash
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
  for (let i = 0; i < Winlines.length; i++) {
    let [a, b, c] = Winlines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
