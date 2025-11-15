import { useState } from "react";
import Boardt from "./Board";

export default function Gamet() {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: (string | null)[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (move: number) => {
    setCurrentMove(move);
  };

  const moves = history.map((squares, move: number) => {
    const description = move > 0 ? `Go To ${move}` : "Start Game";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="row">
      <div className="col">
        <Boardt
          xisNext={xIsNext}
          onPlay={handlePlay}
          squares={currentSquares}
        />
      </div>
      <div className="col">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
