'use strict';

function Game(app, createFunction, puzzleSize, puzzleWidth, imageURL) {
    var self = this;
    self.createFunction = createFunction;

    //State
    self.finished = false;

    //Puzzle set-up, get your pixels straight!!
    self.puzzleSize = puzzleSize;
    self.cellWidth = Math.sqrt(Math.pow(puzzleWidth)/puzzleSize); 
    self.rowLength = puzzleWidth/self.cellWidth;   
    self.imageURL = imageURL;

    //Baseline DOM elements
    self.app = app;
    self.wrapperElement = createFunction('<div class="wrapper"></div>');
    
    //Data

    
      
}




Game.prototype.build = function(){
    var self = this;
    self.app.appendChild(self.wrapperElement);
    var puzzle = new Puzzle(self.wrapperElement, self.createFunction, self.puzzleSize);
    puzzle.mount();
    var board = new Board(self.wrapperElement, self.createFunction, self.puzzleWidth, self.cellWidth, self.rowLength)
    board.mount();
    
    // self.wrapperElement.appendChild(puzzleElement);
    // self.wrapperElement.appendChild(boardElement);
  //   self.wrapperElement.appendChild(self.puzzleCardElement);
  //   self.wrapperElement.appendChild(self.boardElement);
    
    // dragula([document.getElementById("el-1"), document.getElementById("drop-1")], {revertOnSpill: true});
}  


Game.prototype.buildPuzzle = function(){
    var self = this;
    var puzzle = new Puzzle(self.createFunction, self.puzzleSize);
    return puzzle.buildElement(); //Returns a puzzle grid
}

Game.prototype.buildBoard = function(){
    var self = this;
    var board = new Board(self.wrapperElement, self.createFunction, self.puzzleWidth, self.cellWidth, self.rowLength)
    return board.buildElement();
}


  Game.prototype.getTurn = function(){
    var self = this;
    var newMessage = self.getNewMessage();
    var newPiece = self.getPiece();
  }
  


  Game.prototype.destroy = function () {
    var self = this;  
    self.finished = true;
    self.wrapperElement.remove();
  };




//   '<div class="board">\
//     <div class="pat">\
//         <div class="card">\
//             <div class="card-body">\
//                 <h5 class="card-title"><img src="../src/images/user.svg" alt=""> Joni Wan</h5>\
//                 <h6 class="card-subtitle mb-2 text-muted">Barcelona</h6>\
//                 <div class="blockquote">\
//                     <p class="card-text">If you love someone, set them free. If they come back they\'re yours; if they don\'t they never were.</p></div></div><div class="card-footer">\
//                 <div class="pieces">\
//                     <div id="el-1"><div class="jigsaw-img piece piece1"></div></div></div>\
//             </div>\
//         </div>\
//     </div></div>'