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
  // initializing blank board
  var createBlankBoard = function(n) {
    var blankBoard = [];
    var row = [];
    for (var i = 0; i < n; i++) {
      row.push(0);
    }
    for (var j = 0; j < n; j++) {
      blankBoard.push(row.slice());
    }
    return blankBoard;
  };

  var row;
  var counter = 0;
  
  if (n === 0) {
    return [];
  }
  // go through each starting spot n times
  var tempBoard = createBlankBoard(n);
  var prevBoard = [];
  var board = new Board(tempBoard);
  var findSolutiontoNQueens = function (nextBoard, row) {
    if (row === n) {
      return;
    }
    //initialize blank board with size n
    var board = new Board(nextBoard);
    board.child = [];
    console.log(board);
    board.attributes[row][0] = 1;
    for (var k = 0; k < n; k++) {
      prevBoard.push(board.attributes[k].slice());
    }
    
    board.child.push(findSolutiontoNQueens(prevBoard, row + 1));
    // if (board.hasAnyRowConflicts() || board.hasAnyColConflicts() || board.hasAnyMajorDiagonalConflicts() || board.hasAnyMinorDiagonalConflicts()) {
      
    // }
  };
  console.log('tempBoard', tempBoard);
  findSolutiontoNQueens(tempBoard, 0);
  // push all of those results into a storage object
  // check for collisions
  // go to the next row
  // go through all possible starting spots n times
  // push results into the stoage object
  // check for collisions
  // once we hit completed n rows, push all solutions with n queens into results
  // return results[0]

  // solutionsCount is length of results


  // while (start < n) {
  //   var board = new Board({'n': n});
  //   // console.log('start: ', start);
  //   // console.log('new board created: ', board.attributes);
  //   if (n === 6 && start === 1) {
  //     debugger;
  //     // console.log('temp', prevBoard);
  //   }
  //   for (var i = 0; i < n; i++) {
  //     // if we're at the first row, then move the point over
  //     if (i === 0) {
  //       modifier = start;
  //     } else { // otherwise, check from the first columns
  //       modifier = 0;
  //     }
  //     for (var j = n - 1 - modifier; j >= 0; j--) {
  //       prevBoard = [];
  //       counter++;
  //       for (var k = 0; k < n; k++) {
  //         prevBoard.push(board.attributes[k].slice());
  //       }
  //       // console.log('i: ', i, ' j: ', j);
  //       board.attributes[i][j] = 1;
  //       if (board.hasAnyRowConflicts() || board.hasAnyColConflicts() || board.hasAnyMajorDiagonalConflicts() || board.hasAnyMinorDiagonalConflicts()) {
  //         // board.attributes[i][j] = 0;
  //         counter--;
  //         board.attributes = prevBoard;
  //         board.attributes.n = n;
  //       }
  //     }
  //   }
  //   if (counter === n) {
  //     // solution = board.rows();
  //     return board.rows();
  //   }
  //   counter = 0;
  //   start++;
  // }

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




