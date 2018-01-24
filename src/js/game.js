'use strict';

function Game(app, createFunction, puzzleSize, puzzleWidth, imageURL) {
    var self = this;
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
    self.puzzleCardElement = createFunction('<div class="puzzle card"></div>');
    self.cardBodyElement = createFunction('<div class="card-body"></div>'); 
    self.boardElement = createFunction('<div class="board"></div>');
    self.patElement = createFunction('<div class="pat"></div>');
    self.cardElement = createFunction('<div class="card"></div>');
    self.boardCardBodyElement = createFunction('<div class="card-body"></div>');   
    
    //Data
    self.defaultData = {
        messages: [['Sheng', 'M', 'Alicante', 'Never allow someone to be your priority while allowing yourself to be their option.', 5],
                    ['Josep', 'M', 'Barcelona', 'An invisible red thread connects those who are destined to meet, regardless of time, place, or circumstance. The thread may stretch or tangle, but will never break.', 3, 'ancient Chinese Proverb'],
                    ['Andrea', 'M', 'Lisbon', 'What matters in life is not to predict the dangers of travels; is to have them made.', 4, 'Agostinho da Silva'],
                    ['Stephanie', 'F', 'Innsbruck', 'Everything is going to be ok in the end, if it\'s not okay it\'s not the end', 5 ],
                    ['Stephanie', 'F', 'Innsbruck', 'f you are brave enough to say goodbye, life will reward you with a new hello', 5 ]
    };
    self.messages = [];
    self.pieces = [];

    self.createMessagesArray(self.defaultData.messages);    
    self.createPiecesArray(self.puzzleWidth, self.cellWidth);  
}


    Game.prototype.createMessagesArray = function(arr){
        var self = this;
        arr.forEach(element){
            var message = new CheerUpMessage.apply(null, element)
            self.messages.push(message);
        };
        self.messages.sort(function(a,b){
            return a[4] - b[4]; //sorts by ranking
        });
    };

    Game.prototype.createPiecesArray = function(puzzleSize, cellSize){
        var self = this;

    }
  
  Game.prototype.makePuzzle = function(){
    var self = this;
    for(var i=1; i<=self.puzzleSize; i++){
        var cellElement = document.createElement('div');
        cellElement.setAttribute('id', 'drop-'+i);
        cellElement.setAttribute('class', 'drop');
        self.cardBodyElement.appendChild(cellElement);
    }

    self.puzzleCardElement.appendChild(self.cardBodyElement);
  }  

  Game.prototype.getTurn = function(){
    var self = this;
    var newMessage = self.getNewMessage();
    var newPiece = self.getPiece();
  }
  
  Game.prototype.build = function(){
      var self = this;
      self.makePuzzle();
      self.wrapperElement.appendChild(self.puzzleCardElement);
      self.wrapperElement.appendChild(self.boardElement);
      app.appendChild(self.wrapperElement);
      dragula([document.getElementById("el-1"), document.getElementById("drop-1")].on('drop', self.getTurn), {revertOnSpill: true});
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