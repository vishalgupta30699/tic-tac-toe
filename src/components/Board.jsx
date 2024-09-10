import React, { useState } from "react";
import Box from "./Box";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isTurn, setIsTurn] = useState(true);

  const handleOnClick = (index) => {
    if (board[index] != null) {
      return;
    }
    const copy = [...board];
    copy[index] = isTurn ? "X" : "O";
    setBoard(copy);
    setIsTurn(!isTurn);
  };

  const winnerCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isWinner = () => {
    for (let logic of winnerCondition) {
      const [a, c, b] = logic;

      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  };

  const isDraw = () => {
    for (let i of board) {
      if (i === null) {
        return false;
      }
    }
    return true;
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsTurn(true);
  };

  return (
    <>
      {isWinner() ? (
        <div className="winner">
          <p>Congratulation! Winner is {isTurn ? "O" : "X"}</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      ) : isDraw() ? (
        <div className="winner">
          <p>Match is draw</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      ) : (
        <div className="board">
          <h1>
            Now <span className="curr-turn">{isTurn ? "X" : "O"}</span> Turn
          </h1>
          <div className="board-container">
            {board.map((ele, index) => {
              return (
                <Box
                  key={index}
                  data={ele}
                  handleOnClick={() => handleOnClick(index)}
                />
              );
            })}
          </div>
          <button className="reset-btn" onClick={handleRestart}>
            Reset
          </button>
        </div>
      )}
    </>
  );
};

export default Board;
