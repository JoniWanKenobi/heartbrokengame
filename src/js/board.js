function Board(wrapperElement, createFunction, puzzleWidth, cellWidth, rowLength){
    var self = this;    
    self.createFunction = createFunction;
    self.puzzleWidth = puzzleWidth;
    self.cellWidth = cellWidth;
    self.rowLength =rowLength;

    //Baseline DOM elements
    self.boardElement = createFunction('<div class="board"></div>');
    self.patElement = createFunction('<div class="pat"></div>');
    self.cardElement = createFunction('<div class="card"></div>'); 
    self.wrapperElement = wrapperElement;
        
    //Debugging
    self.nextButton = document.createElement('button');
    self.nextButton.innerText = 'Next message';
    
}

Board.prototype.mount = function(){
    var self = this;
        
    var cardBody = new Message(self.cardElement, self.createFunction);
    cardBody.mountCardBody();

    var cardFooter = new CardFooter(self.cardElement, self.createFunction, self.puzzleWidth, self.cellWidth, self.rowLength)
    cardFooter.mountCardFooter();

    self.patElement.appendChild(self.cardElement);
    self.boardElement.appendChild(self.patElement);
    self.wrapperElement.appendChild(self.boardElement);

    var refresh = function(){
        cardBody.refreshMessage();
        cardFooter.refreshCardFooter();
    };

    // self.nextButton.addEventListener('click', refresh);
    // self.boardElement.appendChild(self.nextButton);
    
    cardFooter.drag(refresh);        
}






