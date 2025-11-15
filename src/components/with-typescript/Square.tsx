type SquaretType = {
  value: string | null;
  onSquareClick?: () => void;
};

export default function Squaret({ value, onSquareClick }: SquaretType) {
  return (
    <>
      <button
        className="btn btn-primary border-dark rounded-0"
        style={{ height: "40px", width: "40px" }}
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}
