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
  var tempBoard = [];

  // initializing board
  // for (var i = 0; i < n; i++) {
  //   tempBoard.push([]);

  //   for (var j = 0; j < n; j++) {
  //     tempBoard[i].push(0);
  //   }
  // }

  var board = new Board({'n': n});

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      board.attributes[i][j] = 1;
      if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
        board.attributes[i][j] = 0;
      }
    }
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
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
