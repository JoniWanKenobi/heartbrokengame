'use strict'

function Puzzle(createFunction, puzzleSize){
    var self = this;
    self.puzzleSize = puzzleSize;

    //Baseline DOM elements
    self.puzzleCardElement = createFunction('<div class="puzzle card"></div>');
    self.cardBodyElement = createFunction('<div class="card-body"></div>');
}


Puzzle.prototype.buildElement = function(){
    var self = this;
    for(var i=1; i<=self.puzzleSize; i++){
        var cellElement = document.createElement('div');
        cellElement.setAttribute('id', 'drop-'+i);
        cellElement.setAttribute('class', 'drop');
        self.cardBodyElement.appendChild(cellElement);
    }
    self.puzzleCardElement.appendChild(self.cardBodyElement);
    return self.puzzleCardElement;
  }