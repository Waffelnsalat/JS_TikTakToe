const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';
let gameBoard = ['','','','','','','','',''];

squares.forEach(square => {
  square.addEventListener('click', handleClick);
});

function handleClick(event) {
  const index = parseInt(event.target.dataset.index);
  if (gameBoard[index] !== '') return;
  gameBoard[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  setTimeout(function(){
  if (checkWin()) {
    alert(`${currentPlayer} wins!`);
    resetGame();
  } else if (checkTie()) {
    alert("It's a tie!");
    resetGame();
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }},5);
}

function checkWin() {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  return !gameBoard.includes('');
}

function resetGame() {
  gameBoard = ['','','','','','','','',''];
  currentPlayer = 'X';
  squares.forEach(square => {
    square.textContent = '';
  });
}
