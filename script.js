var board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
var firstPlayer = 1;
var secondPlayer = 2;
var current = firstPlayer;
var finished = false;

function flip(obj) {
  if (finished == false) {
    obj.style.transform = "scaleY(-1)";
    var clickCell = obj.id.split(",");
    var clickRow = Number(clickCell[0]);
    var clickCol = Number(clickCell[1]);
    if (board[clickRow][clickCol] == 0) {
      board[clickRow][clickCol] = current;
      if (current == firstPlayer) {
        document.getElementById("turn").innerHTML = "Player 2 Turn!";
        document.getElementById("turn").style.color = "teal";
        obj.style.background = "tomato";
        current = secondPlayer;
        setTimeout(() => {
          computer();
        }, 200);
      } else {
        document.getElementById("turn").innerHTML = "Player 1 Turn!";
        document.getElementById("turn").style.color = "salmon";
        obj.style.background = "teal";
        current = firstPlayer;
      }
    }
    whoWin();
  }
}

function computer() {
  var row = Math.floor(Math.random() * 4);
  var col = Math.floor(Math.random() * 4);

  while (board[row][col] == 1 || board[row][col] == 2) {
    row = Math.floor(Math.random() * 4);
    col = Math.floor(Math.random() * 4);
  }
  var random = row + "," + col;
  document.getElementById(random).click();
}

function whoWin() {
  if (verticalCheckPlayer(firstPlayer) == true) {
    finished = true;
    document.getElementById("winner").innerHTML = "Player 1 Win!";
  } else if (verticalCheckPlayer(secondPlayer) == true) {
    finished = true;
    document.getElementById("winner").innerHTML = "Player 2 Win!";
  } else if (horizontalCheckPlayer(firstPlayer) == true) {
    finished = true;
    document.getElementById("winner").innerHTML = "Player 1 Win!";
  } else if (horizontalCheckPlayer(secondPlayer) == true) {
    finished = true;
    document.getElementById("winner").innerHTML = "Player 2 Win!";
  } else if (diagonalCheckPlayer(firstPlayer) == true) {
    finished = true;
    document.getElementById("winner").innerHTML = "Player 1 Win!";
  } else if (diagonalCheckPlayer(secondPlayer) == true) {
    finished = true;
    document.getElementById("winner").innerHTML = "Player 2 Win!";
  } else if (isDraw()) {
    finished = true;
    document.getElementById("winner").innerHTML = "It's a Draw!";
  }
}

function isDraw() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (board[i][j] == 0) {
        return false;
      }
    }
  }
  return true;
}

function verticalCheckPlayer(player) {
  for (let i = 0; i < 4; i++) {
    if (
      board[0][i] == player &&
      board[1][i] == player &&
      board[2][i] == player &&
      board[3][i] == player
    ) {
      return true;
    }
  }
  return false;
}

function horizontalCheckPlayer(player) {
  for (let i = 0; i < 4; i++) {
    if (
      board[i][0] == player &&
      board[i][1] == player &&
      board[i][2] == player &&
      board[i][3] == player
    ) {
      return true;
    }
  }
  return false;
}

function diagonalCheckPlayer(player) {
  if (
    (board[0][0] == player &&
      board[1][1] == player &&
      board[2][2] == player &&
      board[3][3] == player) ||
    (board[0][3] == player &&
      board[1][2] == player &&
      board[2][1] == player &&
      board[3][0] == player)
  ) {
    return true;
  }
  return false;
}
