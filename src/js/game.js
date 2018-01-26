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
}

Game.prototype.build = function(){
    var self = this;
    self.app.appendChild(self.wrapperElement);    
    self.puzzle.mount();    
    self.board.mount();    
}


Game.prototype.destroy = function () {
    var self = this;  
    self.finished = true;
    self.wrapperElement.remove();
};




