/* eslint-disable operator-linebreak */
/* eslint-disable no-plusplus */
(function () {
  const initialRender = () => {
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

    board.classList.toggle('hidden');

    return { board, render };
  };

  const newBoard = initialRender();
  newBoard.render();
  newBoard.board.classList.toggle('hidden');

  const ticTacToe = () => {
    // Cache DOM
    let player = 'X';
    const exSymbol = 'X';
    const circleSymbol = 'O';
    const squares = document.querySelectorAll('.square');
    let xTurn;

    function drawMark(square, currentSymbol) {
      const cell = square;
      cell.innerHTML = currentSymbol;
    }

    function changeTurns() {
      xTurn = !xTurn;
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
          console.log(`And the winner is ${player}`);
          player = player === exSymbol ? circleSymbol : exSymbol;
          return true;
        }
      }
      return false;
    }

    function squareHandler(e) {
      const square = e.target;
      const currentSymbol = xTurn ? circleSymbol : exSymbol;
      drawMark(square, currentSymbol);
      changeTurns();
      checkForWin();
    }

    // Listeners
    squares.forEach((square) => {
      square.addEventListener('click', squareHandler, { once: true });
    });
  };
  ticTacToe();
}());
