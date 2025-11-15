import CalculateWinnert from "./CalculateWinner";
import Squaret from "./Square";

type BoardtType = {
  xisNext: boolean;
  onPlay: (Squares: (string | null)[]) => void;
  squares?: Array<string | null>;
};

export default function Boardt({ xisNext, onPlay, squares }: BoardtType) {
  // ensure we always have a 9-item array to read from
  //   const squares = squart ?? Array(9).fill(null);

  const winner = CalculateWinnert(squares);
  let status: string;
  if (winner) {
    status = "winner " + winner;
  } else {
    status = "next is " + (xisNext ? "X" : "O");
  }
  const handleClick = (i: number) => {
    const nextSquare = squares.slice();
    if (winner || squares[i]) {
      return;
    }
    if (xisNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    onPlay(nextSquare);
  };

  return (
    <>
      <div className="m-3">
        <div>
          <h5>{status}</h5>
        </div>
        <div>
          <Squaret value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Squaret value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Squaret value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div>
          <Squaret value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Squaret value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Squaret value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div>
          <Squaret value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Squaret value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Squaret value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
