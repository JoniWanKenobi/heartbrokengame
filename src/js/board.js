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
        
    //Debugging
    self.nextButton = document.createElement('button');
    self.nextButton.innerText = 'Next message';
    
}

Board.prototype.mount = function(){
    var self = this;
    var counter = 2;
    
    var boardElement = self.createFunction('<div class="board"></div>');
    
    var cardBody = new Message(self.cardElement, self.createFunction);
    cardBody.mountCardBody();

    var cardFooter = new CardFooter(self.cardElement, self.createFunction, self.puzzleWidth, self.cellWidth, self.rowLength)
    cardFooter.mountCardFooter();

    self.patElement.appendChild(self.cardElement);
    boardElement.appendChild(self.patElement);
    self.wrapperElement.appendChild(boardElement);

    var refresh = function(){
        cardBody.refreshMessage();
        cardFooter.refreshCardFooter();
        dragula([document.getElementById("el-"+ counter), document.getElementById("drop-"+ counter)], {revertOnSpill: true}).on('drop',refresh)
        counter ++;
    };  
    
    dragula([document.getElementById("el-1"), document.getElementById("drop-1")], {revertOnSpill: true}).on('drop',refresh)
    
}








