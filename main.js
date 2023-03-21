/* eslint-disable operator-linebreak */
/* eslint-disable no-plusplus */
(function () {
  const gameBoard = () => {
    // cache DOM
    const board = document.getElementById('game-board');

    // Render
    function render() {
      if (board.children.length === 9) {
        return;
      }
      for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        board.appendChild(square);
      }
    }

    function clear(squares) {
      squares.forEach((square) => {
        // eslint-disable-next-line no-param-reassign
        square.innerHTML = '';
      });
      // squares.forEach((square) => {
      //   board.removeChild(square);
      // });
    }

    return { board, render, clear };
  };

  const newBoard = gameBoard();

  // function callBoard() {
  //   newBoard.render();
  // }

  const ticTacToe = () => {
    // callBoard();
    // Cache DOM
    let player = 'X';
    const endgameScreen = document.getElementById('endgame');
    const notification = document.getElementById('notific');
    const playAgainBtn = document.getElementById('play-again');
    const exSymbol = 'X';
    const circleSymbol = 'O';
    const squares = document.querySelectorAll('.square');
    let xTurn;

    if (!endgameScreen.classList.contains('hidden')) {
      newBoard.clear(squares);
      endgameScreen.classList.toggle('hidden');
    }

    function drawMark(square, currentSymbol) {
      const cell = square;
      cell.innerHTML = currentSymbol;
    }

    function changeTurns() {
      xTurn = !xTurn;
      player = player === exSymbol ? circleSymbol : exSymbol;
    }

    function checkForWin() {
      const winConditions = [
        // Horizontal wins
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical wins
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal wins
        [0, 4, 8],
        [2, 4, 6],
      ];
      const sqrArr = [];
      squares.forEach((square) => sqrArr.push(square.innerHTML));
      for (let i = 0; i < winConditions.length; i++) {
        if (
          sqrArr[winConditions[i][0]] === player &&
          sqrArr[winConditions[i][1]] === player &&
          sqrArr[winConditions[i][2]] === player
        ) {
          return true;
        }
      }
      return false;
    }

    function victoryScreen() {
      endgameScreen.classList.toggle('hidden');
      notification.innerHTML = `${player} wins a sweet dub`;
    }

    function drawScreen() {
      endgameScreen.classList.toggle('hidden');
      notification.innerHTML = 'Its a draw';
    }

    function checkForDraw() {
      for (let i = 0; i < squares.length; i++) {
        if (squares[i].innerHTML === '') {
          return false;
        }
      }
      return true;
    }

    function squareHandler(e) {
      const square = e.target;
      const currentSymbol = xTurn ? circleSymbol : exSymbol;
      drawMark(square, currentSymbol);
      if (checkForDraw()) {
        drawScreen();
      }
      if (checkForWin()) {
        victoryScreen();
      }
      changeTurns();
    }

    // Listeners
    squares.forEach((square) => {
      square.addEventListener('click', squareHandler, { once: true });
    });
    playAgainBtn.addEventListener('click', ticTacToe);
  };
  ticTacToe();
}());
