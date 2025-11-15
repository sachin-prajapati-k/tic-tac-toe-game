import CalculateWinnert from "./CalculateWinner";
import Squaret from "./Square";
import { useState } from "react";
type BoardtType = {
  value: string;
  handleClick: () => void;
  i: string | number;
  status: string;
};

export default function Boardt(): BoardtType {
  const [value, setValue] = useState(Array(9).fill(null));
  const [xisNext, setXisNext] = useState(true);
  const winner = CalculateWinnert(value);
  let status: string;
  if (winner) {
    status = "winner " + winner;
  } else {
    status = "next is " + (xisNext ? "X" : "O");
  }
  const handleClick = (i: number) => {
    const nextSquare = value.slice();
    if (winner || value[i]) {
      return;
    }
    if (xisNext) {
      nextSquare[i] = "X";
      setXisNext(false);
    } else {
      nextSquare[i] = "O";
      setXisNext(true);
    }

    setValue(nextSquare);
  };

  return (
    <>
      <div className="m-3">
        <div>
          <h5>{status}</h5>
        </div>
        <div>
          <Squaret value={value[0]} onSquareClick={() => handleClick(0)} />
          <Squaret value={value[1]} onSquareClick={() => handleClick(1)} />
          <Squaret value={value[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div>
          <Squaret value={value[3]} onSquareClick={() => handleClick(3)} />
          <Squaret value={value[4]} onSquareClick={() => handleClick(4)} />
          <Squaret value={value[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div>
          <Squaret value={value[6]} onSquareClick={() => handleClick(6)} />
          <Squaret value={value[7]} onSquareClick={() => handleClick(7)} />
          <Squaret value={value[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
