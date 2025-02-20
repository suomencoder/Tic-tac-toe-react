import React, { useState } from 'react';
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || checkWinner(board)) return;
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === 'X' ? 'O' : 'X');
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
  };

  const winner = checkWinner(board);
  const isDraw = !winner && board.every((cell) => cell);

  return (
    <div>
      <div class="container">
        <div class="box">
          <h1>Tic Tac Toe</h1>
          <h2>
            {winner
              ? `Winner: ${winner}`
              : isDraw
              ? "It's a Draw!"
              : `Next Player: ${player}`}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 60px)',
              gap: '5px',
            }}
          >
            {board.map((cell, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                style={{ width: '60px', height: '60px', fontSize: '24px' }}
                class="cell"
              >
                {cell}
              </button>
            ))}
            <button
              onClick={resetGame}
              style={{ marginTop: '20px', fontSize: '18px' }}
              id="knopka"
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
