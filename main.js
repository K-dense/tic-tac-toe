/* eslint-disable no-plusplus */
const boardGenerator = () => {
  const GAME_BOARD = document.getElementById('game-board');

  for (let i = 0; i < 9; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    GAME_BOARD.appendChild(square);
  }
};

boardGenerator();
