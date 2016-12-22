/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // find a starting point
  // check if the next position is available to place a piece
  // if it is available put a piece in that location
    //check next position
  //when we have the expected number of pieces 
  var tempBoards = [];
  var prevBoard = [];

  // initializing board
  // for (var i = 0; i < n; i++) {
  //   tempBoard.push([]);

  //   for (var j = 0; j < n; j++) {
  //     tempBoard[i].push(0);
  //   }
  // }

  var board = new Board({'n': n});
  // console.log('board', board);
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      prevBoard = [];
      for (var k = 0; k < n; k++) {
        prevBoard.push(board.attributes[k].slice());
        tempBoards.push(prevBoard);
      }
      // console.log('temp', prevBoard);
      board.attributes[i][j] = 1;
      if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
        // board.attributes[i][j] = 0;
        board.attributes = prevBoard;
        board.attributes.n = n;
      }
    }
    // console.log('all temps', tempBoards);
  }

  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var countRooks = function (n) {
    if (n === 0) {
      return 1;
    }
    return n *= countRooks(n - 1);
  };
  return countRooks(n);
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // find a solution where the amount of queens on the board is equal to the width of the board (in squares) and the queens cannot attack each other
  // find the starting spot - implement a counter (to track the queens placed)
      // place new queen in the next available square
      // check if this is a viable option
        // we need to keep it
        // if not, revert back to previous board view
      // repeat until we come with a viable option
      // return viable option

  // var counter = 0;

  // for() {

  // }

  var solution = [];
  var prevBoard = [];
  var counter = 0;
  var start = 0;
  var modifier;
  var row = [];
  var blankBoard = [];

  // // initializing blank board
  // var createBlankBoard = function(n) {
  //   for (var i = 0; i < n; i++) {
  //     row.push(0);
  //   }
  //   for (var j = 0; j < n; j++) {
  //     blankBoard.push(row.slice());
  //   }
  // };
  // console.log('n: ', n);
  // createBlankBoard(n);
  // console.log(blankBoard);

  while (start < n) {
    var board = new Board({'n': n});
    // console.log('start: ', start);
    // console.log('new board created: ', board.attributes);
    if (n === 6 && start === 0) {
      debugger;
      // console.log('temp', prevBoard);
    }
    for (var i = 0; i < n; i++) {
      // if we're at the first row, then move the point over
      if (i === 0) {
        modifier = start;
      } else { // otherwise, check from the first columns
        modifier = 0;
      }
      for (var j = modifier; j < n; j++) {
        prevBoard = [];
        counter++;
        for (var k = 0; k < n; k++) {
          prevBoard.push(board.attributes[k].slice());
        }
        // console.log('i: ', i, ' j: ', j);
        board.attributes[i][j] = 1;
        if (board.hasAnyRowConflicts() || board.hasAnyColConflicts() || board.hasAnyMajorDiagonalConflicts() || board.hasAnyMinorDiagonalConflicts()) {
          // board.attributes[i][j] = 0;
          counter--;
          board.attributes = prevBoard;
          board.attributes.n = n;
        }
      }
    }
    if (counter === n) {
      // solution = board.rows();
      return board.rows();
    }
    counter = 0;
    start++;
  }

  // console.log('n: ', n);
  // console.log('solution: ', solution);
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
