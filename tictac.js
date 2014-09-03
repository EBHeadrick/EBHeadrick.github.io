/**
 * Created by EB on 9/3/2014.
 */

var all_games =
[ [ [ 'X', 'X', 'X' ],
    [ 'X', 'O', 'O' ],
    [ 'X', 'O', 'O' ] ],

  [ [ 'X', 'X', 'X' ],
    [ 'X', 'O', 'O' ],
    [ 'O', 'X', 'O' ] ],

  [ [ 'X', 'X', 'X' ],
    [ 'X', 'O', 'O' ],
    [ 'O', 'O', 'X' ] ],

  [ [ 'X', 'X', 'X' ],
    [ 'X', 'O', 'O' ],
    [ 'O', ' ', ' ' ] ],

  [ [ 'X', 'X', 'X' ],
    [ 'X', 'O', 'O' ],
    [ ' ', 'O', ' ' ] ],

  [ [ 'X', 'X', 'X' ],
    [ 'X', 'O', 'O' ],
    [ ' ', ' ', 'O' ] ],

  [ [ ' ', 'X', 'O' ],
    [ 'X', 'O', 'O' ],
    [ 'O', 'X', 'X' ] ],

  [ [ 'O', 'O', 'X' ],
    [ 'X', 'X', 'O' ],
    [ 'O', 'X', 'X' ] ] ]


function checkRow (board){
    var win = false;

    board.forEach(function(row) {
    if ((row[0] === row[1]) && (row[2] === row[1])) {
    win = true;
    }
    });return win;
    }

function checkCol (board) {
    var col1 = [],
    col2 = [],
    col3 = [],
    columns = [[]];
    board.forEach(function(row){
    col1.push (row[0]);
    col2.push (row[1]);
    col3.push (row[2]);
    })

    columns = [col1, col2, col3];

    return checkRow(columns);

    }

function checkDiagonal (board) {
    var win = false;

    if ((board[0][0] === board[1][1]) && (board[2][2] === board[1][1])) {win = true;};
    if ((board[0][2] === board[1][1]) && (board[0][2] === board[1][1])) {win = true;};

    return win;
    }

function gameWin (board) {

    if (checkCol(board)) {winStats.col++;  return true;}
    if (checkRow(board)) {winStats.row++;  return true;}
    if (checkDiagonal(board)) {winStats.diag++; return true;}
    }

var y= 0,
winStats = {
    row: 0,
    col: 0,
    diag: 0
    }
;
all_games.forEach(function(board, i){
    if (gameWin (board)){
    y++;
    console.log("WIN " + i +"----"+ y)};
    })

console.log(winStats);
console.log("Total : " + (winStats.row+winStats.col+winStats.diag));
