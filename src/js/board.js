function Board(createFunction){
    var self = this;    
    self.createFunction = createFunction;

    //Baseline DOM elements
    self.boardElement = createFunction('<div class="board"></div>');
    self.patElement = createFunction('<div class="pat"></div>');
    self.cardElement = createFunction('<div class="card"></div>');         
}

Board.prototype.buildElement = function(){
    var self = this;
    self.refreshMessages();
    self.patElement.appendChild(self.cardElement);
    self.boardElement.appendChild(self.patElement);
    
    return self.boardElement;
}

Board.prototype.refreshMessages = function(){
    var self = this;

    var cardBody = new Message(self.cardElement, self.createFunction);
    cardBody.nextCardBody();
}



