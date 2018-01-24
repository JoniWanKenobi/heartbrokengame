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

    //Baseline DOME elements
    self.app = app;
    self.wrapperElement = createFunction('<div class="wrapper"></div>');   
      
}


Game.prototype.build = function(){
    var self = this;
    var puzzleElement = self.buildPuzzle();
    self.wrapperElement.appendChild(puzzleElement);
  //   self.wrapperElement.appendChild(self.puzzleCardElement);
  //   self.wrapperElement.appendChild(self.boardElement);
    app.appendChild(self.wrapperElement);
    dragula([document.getElementById("el-1"), document.getElementById("drop-1")].on('drop', self.getTurn), {revertOnSpill: true});
}  


Game.prototype.buildPuzzle = function(){
    var self = this;
    var puzzle = new Puzzle(self.createFunction, self.puzzleSize);
    return puzzle.makePuzzle(); //Returns a puzzle grid
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