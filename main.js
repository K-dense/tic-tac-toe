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
    const exClass = 'x';
    const circleClass = 'O';
    const squares = document.querySelectorAll('.square');
    let xTurn;

    function drawMark(square, currentClass) {
      square.innerHTML = currentClass;
    }

    function squareHandler(e) {
      const square = e.target;
      const currentClass = xTurn ? circleClass : exClass;
      drawMark(square, currentClass);
    }

    // Listeners
    squares.forEach((square) => {
      square.addEventListener('click', squareHandler, { once: true });
    });
  };
  ticTacToe();
}());
