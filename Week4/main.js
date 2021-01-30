// class Game {
//   constructor () {
//     this.board = document.getElementById("board");
//     board.addEventListener("click", this.addPiece);

//     this.clear = document.getElementById("clear");
//     clear.addEventListener("click", this.clearBoard);

//     this.player = "X";
//   }

//   player = null;
  
//   addPiece(event) {
//     const cell = event.target;
//     const playerX = "X";
//     const playerO = "O";

//     cell.innerText = this.player;

//     this.player =
//         this.player === playerO ? playerX : playerO;
//   }

//   clearBoard() {
//     for (const cell of board.children) {
//       cell.innerText = "";
//     }
//   }
// }

// const game = new Game();

board = document.getElementById("board");
board.addEventListener("click", addPiece);

clear = document.getElementById("clear");
clear.addEventListener("click", clearBoard);

const playerX = "X";
const playerO = "O";
player = playerX;

function addPiece(event) {
  if (gameStatus.innerText) {
    clearBoard();
    return;
  }

  const cell = event.target;

  cell.innerText = player;

  player = player === playerO ? playerX : playerO;

  checkWinner();
}

function clearBoard() {
  for (const cell of board.children) {
    cell.innerText = "";
      }
   //player = playerX;

   gameStatus.innerText = "";
}

const A1 = document.getElementById("A1");
const A2 = document.getElementById("A2");
const A3 = document.getElementById("A3");
const B1 = document.getElementById("B1");
const B2 = document.getElementById("B2");
const B3 = document.getElementById("B3");
const C1 = document.getElementById("C1");
const C2 = document.getElementById("C2");
const C3 = document.getElementById("C3");

const winningCombos = [
  [A1,B1,C1],
  [A2,B2,C2],
  [A3,B3,C3],
  [A1,A2,A3],
  [B1,B2,B3],
  [C1,C2,C3],
  [A1,B2,C3],
  [A3,B2,C1]
];

const gameStatus = document.getElementById("gameStatus");

function checkWinner() {
  for (const p of ["X", "O"]) {
    for (const combo of winningCombos) {
      if (combo[0].innerText === p &&
          combo[1].innerText === p &&
          combo[2].innerText === p) {
        gameStatus.innerText = "The winner is Player " + p + "!";
      }
    }
  }

  let cells = 0;
  for (const cell of board.children) {
    if (cell.innerText) {
      cells++;
    }
  }
  if (cells === 9) {
    gameStatus.innerText = "It's a cat's game. :("
  }
}
