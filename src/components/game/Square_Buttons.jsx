import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="btn btn-dark rounded-0 border-white"
      style={{ width: "40px", height: "40px" }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
function Board({ xisNext, squares, onPlay }) {
  // const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = CalculateWinner(squares);
  let Status;
  if (winner) {
    Status = "winner " + winner;
  } else {
    Status = "Next Player " + (xisNext ? "X" : "O");
  }

  const handleClick = (i) => {
    if (CalculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    // if (squares[i]) {
    //   return;
    // }
    if (xisNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
    // setSquares(nextSquare);
    // setXisNext(!xisNext);
  };

  return (
    <div className="m-3">
      <div className="font-bold">{Status}</div>
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

function CalculateWinner(squares) {
  const WinLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
  ];

  for (let i = 0; i < WinLines.length; i++) {
    const [a, b, c] = WinLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xisNext = currentMove % 2 === 0;
  const currentSquare = history[currentMove];
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // setXisNext(nextMove % 2 === 0);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go To Move " + move;
    } else {
      description = "Start Game ";
    }
    return (
      <li key={move} className="list-group-item m-1 p-1">
        <button
          className="btn btn-primary rounded-pill"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });
  return (
    <>
      <div className="row">
        <div className="board col-2 ms-3">
          <Board
            xisNext={xisNext}
            squares={currentSquare}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info col-8">
          <ol className="list-group">{moves}</ol>
        </div>
      </div>
    </>
  );
}
