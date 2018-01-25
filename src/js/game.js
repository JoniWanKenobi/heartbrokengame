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

    // self.messagesArray = [];
    // self.defaultData = {
    //     messages: [['Sheng', 'M', 'Alicante', 'Never allow someone to be your priority while allowing yourself to be their option.', 5,''],
    //                 ['Josep', 'M', 'Barcelona', 'An invisible red thread connects those who are destined to meet, regardless of time, place, or circumstance. The thread may stretch or tangle, but will never break.', 3, 'Ancient Chinese Proverb'],
    //                 ['Andrea', 'M', 'Lisbon', 'What matters in life is not to predict the dangers of travels; is to have them made.', 7, 'Agostinho da Silva'],
    //                 ['Stephanie', 'F', 'Innsbruck', 'Everything is going to be ok in the end, if it\'s not okay it\'s not the end', 5, '' ],
    //                 ['Stephanie', 'F', 'Innsbruck', 'f you are brave enough to say goodbye, life will reward you with a new hello', 5, '' ]]
    // };

    // self.createMessagesArray(self.defaultData.messages);
      
}

// Message.prototype.createMessagesArray = function(arr){
//     var self = this;

//     arr.forEach(function(element){
//         var message = new CheerUpMessage(element[0], element[1], element[2], element[3], element[4], element[5], element[6]);
//         self.messagesArray.push(message);
//     });

//     self.messagesArray.sort(function(a,b){
//         return b.rating - a.rating;
//     });
    
// };


Game.prototype.build = function(){
    var self = this;
    var puzzleElement = self.buildPuzzle();
    var boardElement = self.buildBoard();
    
    self.wrapperElement.appendChild(puzzleElement);
    self.wrapperElement.appendChild(boardElement);
  //   self.wrapperElement.appendChild(self.puzzleCardElement);
  //   self.wrapperElement.appendChild(self.boardElement);
    app.appendChild(self.wrapperElement);
    dragula([document.getElementById("el-1"), document.getElementById("drop-1")], {revertOnSpill: true});
}  


Game.prototype.buildPuzzle = function(){
    var self = this;
    var puzzle = new Puzzle(self.createFunction, self.puzzleSize);
    return puzzle.buildElement(); //Returns a puzzle grid
}

Game.prototype.buildBoard = function(){
    var self = this;
    var board = new Board(self.createFunction, self.messagesArray)
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