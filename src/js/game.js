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

    //Inner objects
    self.puzzle =  new Puzzle(self.wrapperElement, self.createFunction, self.puzzleSize);
    self.board = new Board(self.wrapperElement, self.createFunction, self.puzzleWidth, self.cellWidth, self.rowLength);

    self.counter = 1;
    self.onEnded;
}

Game.prototype.onGameover = function(callback){
    var self = this;
    self.onEnded = callback;
}

Game.prototype.build = function(){
    var self = this;
    self.app.appendChild(self.wrapperElement);    
    self.puzzle.mount();    
    self.board.mount();  
    self.play();
}

Game.prototype.play = function(){
    var self = this;
    var refresh = function(){        
        self.board.refresh();       
        var num = self.board.cardFooter.pieceNumber;
        dragula([document.getElementById("el-"+ num), document.getElementById("drop-"+ num)], {revertOnSpill: true})
        .on('drop',refresh);                
        self.counter ++;
        self.checkEnd();
    };

    if(self.counter === 1){
        refresh();
    }
}

Game.prototype.checkEnd = function(){
    var self = this;
    if(self.counter > 36){
        self.onEnded();
    }

    console.log('pieces: ', self.board.cardFooter.pieces)
    console.log('piecenumber: ', self.board.cardFooter.pieceNumber);
    console.log('counter: ', self.counter);

}

Game.prototype.destroy = function () {
    var self = this;  
    self.finished = true;
    self.wrapperElement.remove();
};




