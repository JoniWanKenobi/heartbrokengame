'use strict'

function Puzzle(wrapperElement, createFunction, puzzleSize){
    var self = this;
    self.wrapperElement = wrapperElement;
    self.puzzleSize = puzzleSize;

    //Baseline DOM elements
    self.puzzleCardElement = createFunction('<div class="puzzle card"></div>');
    self.cardBodyElement = createFunction('<div class="card-body"></div>');
    self.music = createFunction(' <audio controls><source src="./src/music/lovesong.mp3" type="audio/mpeg"></audio>')
}


Puzzle.prototype.mount = function(){
    var self = this;
    for(var i=1; i<=self.puzzleSize; i++){
        var cellElement = document.createElement('div');
        cellElement.setAttribute('id', 'drop-'+i);
        cellElement.setAttribute('class', 'drop');
        self.cardBodyElement.appendChild(cellElement);
    }
    self.puzzleCardElement.appendChild(self.cardBodyElement);
    var cardFooter = document.createElement('div');
    cardFooter.setAttribute('class', 'card-footer');
    cardFooter.appendChild(self.music);
    self.puzzleCardElement.appendChild(cardFooter);
    self.wrapperElement.appendChild(self.puzzleCardElement);
  }