function Board(createFunction){
    var self = this;    

    //Baseline DOM elements
    self.boardElement = createFunction('<div class="board"></div>');
    self.patElement = createFunction('<div class="pat"></div>');
    self.cardElement = createFunction('<div class="card"></div>');         
}

Board.prototype.buildElement = function(){
    var self = this;
    self.patElement.appendChild(self.cardElement);
    self.boardElement.appendChild(self.patElement);
    return self.boardElement;
}



