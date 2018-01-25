function Board(createFunction){
    var self = this;    
    self.createFunction = createFunction;

    //Baseline DOM elements
    self.boardElement = createFunction('<div class="board"></div>');
    self.patElement = createFunction('<div class="pat"></div>');
    self.cardElement = createFunction('<div class="card"></div>'); 
        
    //Debugging
    self.nextButton = document.createElement('button');
    self.nextButton.innerText = 'Next message';
    
}

Board.prototype.buildElement = function(){
    var self = this;    
    var cardBody = new Message(self.cardElement, self.createFunction);
    cardBody.nextCardBody();
    self.patElement.appendChild(self.cardElement);
    self.boardElement.appendChild(self.patElement);
    self.nextButton.addEventListener('click', cardBody.refreshMessage.bind(cardBody));
    self.boardElement.appendChild(self.nextButton);
    
    return self.boardElement;
}




