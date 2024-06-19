// player = 1 is player "X" and player = 0 is player "O"
// let's start with X having the first turn
let player = 1;
let gameOver = false;

let turn_span = document.getElementById("turn");
let tiles = document.querySelectorAll(".tile");
let winner_div = document.getElementById("winner");
let player_h2 = document.getElementById("player");

let isWinner = (player) => {
  let winning_classes = [
    "row1",
    "row2",
    "row3",
    "col1",
    "col2",
    "col3",
    "diag1",
    "diag2",
  ];
  let winner = false;

  //use class selector to pick set of HTML elements
  //that have the win_class.player class
  winning_classes.forEach((win_class) => {
    let selector = "." + player + "." + win_class;
    let player_tiles = document.querySelectorAll(selector);

    if (player_tiles.length === 3) {
      winner = true;
    }
  });
  return winner;
};

tiles.forEach((tile) => {
  tile.onclick = () => {
    //allowed to click if tile is empty and game is not over
    if (tile.innerHTML === "" && !gameOver) {
      if (player === 1) {
        tile.innerHTML = "X";
        tile.classList.add("x");

        turn_span.innerHTML = "O";
        if (isWinner("x")) {
          winner_div.innerHTML = "X IS THE WINNER";
          turn_span.innerHTML = "";
          player_h2.innerHTML = "";
          winner_div.classList.add("x");
          gameOver = true;
        }

        //pass it off to player 0
        player = 0;
      } else {
        tile.innerHTML = "O";
        tile.classList.add("o");

        turn_span.innerHTML = "X";
        if (isWinner("o")) {
          winner_div.innerHTML = "O IS THE WINNER";
          turn_span.innerHTML = "";
          player_h2.innerHTML = "";
          winner_div.classList.add("o");
          gameOver = true;
        }

        //pass it off to player 1
        player = 1;
      }
      tile.style.cursor = "not-allowed";
    }
  };
});
