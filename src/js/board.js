'use strict';

function Board(wrapperElement, createFunction, puzzleWidth, cellWidth, rowLength){
    var self = this;    
    self.createFunction = createFunction;
    self.puzzleWidth = puzzleWidth;
    self.cellWidth = cellWidth;
    self.rowLength =rowLength;

    //Baseline DOM elements    
    self.patElement = createFunction('<div class="pat"></div>');
    self.cardElement = createFunction('<div class="card"></div>'); 
    self.wrapperElement = wrapperElement;
        
    //Inner objects
    self.cardBody = new Message(self.cardElement, self.createFunction);
    self.cardFooter = new CardFooter(self.cardElement, self.createFunction, self.puzzleWidth, self.cellWidth, self.rowLength);
    
}

Board.prototype.mount = function(){
    var self = this;
    var boardElement = self.createFunction('<div class="board"></div>');      
    self.cardBody.mountCardBody();    
    self.cardFooter.mountCardFooter();
    self.patElement.appendChild(self.cardElement);
    boardElement.appendChild(self.patElement);
    self.wrapperElement.appendChild(boardElement);    
}

Board.prototype.refresh = function(){
    var self = this;
    self.cardBody.refreshMessage();        
    self.cardFooter.refreshCardFooter();  
}








