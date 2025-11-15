export default function CalculateWinnert(squarest) {
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
    if (
      squarest[a] &&
      squarest[a] === squarest[b] &&
      squarest[a] === squarest[c]
    ) {
      return squarest[a];
    }
  }
  return null;
}
