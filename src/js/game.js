'use strict';

function Game(app, createFunction, puzzleSize) {
    var self = this;
    self.puzzleSize = puzzleSize;    
    self.wrapperElement = createFunction('<div class="wrapper"></div>');
    self.puzzleCardElement = createFunction('<div class="puzzle card"></div>');
    self.cardBodyElement = createFunction('<div class="card-body"></div>');    
    self.boardHTML ='<div class="board">\
                        <div class="pat">\
                            <div class="card">\
                                <div class="card-body">\
                                    <h5 class="card-title"><img src="../src/images/user.svg" alt=""> Joni Wan</h5>\
                                    <h6 class="card-subtitle mb-2 text-muted">Barcelona</h6>\
                                    <div class="blockquote">\
                                        <p class="card-text">If you love someone, set them free. If they come back they\'re yours; if they don\'t they never were.</p></div></div><div class="card-footer">\
                                    <div class="pieces">\
                                        <div id="el-1"><div class="jigsaw-img piece piece1"></div></div></div>\
                                </div>\
                            </div>\
                        </div></div>';
    self.boardElement = createFunction(self.boardHTML);
    self.app = app;  
    self.finished = false;  
}

// Game.prototype.makeRangeArray = function(size){
//     var arr = [];
//     for(var i=1; i<=size; i++){
//         arr.push(i);
//     }
//     var copyArr = arr.slice();
//     var shuffledArr = [];
//     while(copyArr.length>0){
//         var ranNum = Math.floor(Math.random() * copyArr.length);
//         var el = copyArr.splice(ranNum,1)[0];
//         shuffledArr.push(el);
//     }

//     return shuffledArr;
// }
  
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


  
  Game.prototype.build = function(){
      var self = this;
      self.makePuzzle();
      self.wrapperElement.appendChild(self.puzzleCardElement);
      self.wrapperElement.appendChild(self.boardElement);
      app.appendChild(self.wrapperElement);
      dragula([document.getElementById("el-1"), document.getElementById("drop-1")], {revertOnSpill: true});
  }  

  Game.prototype.destroy = function () {
    var self = this;  
    self.finished = true;
    self.wrapperElement.remove();
  };