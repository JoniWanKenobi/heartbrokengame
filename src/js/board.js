function Board(wrapperElement, createFunction, puzzleWidth, rowLength, cellWidth){
    var self = this;
    self.puzzleWidth = puzzleWidth;
    self.rowLength = rowLength;
    self.cellWidth = cellWidth;
    self.wrapperElement = wrapperElement;
    self.boardElement = createFunction('<div class="board"></div>');
    self.patElement = createFunction('<div class="pat"></div>');
    self.cardElement = createFunction('<div class="card"></div>');
    self.boardCardBodyElement = createFunction('<div class="card-body"></div>');   
    
    //Data
    self.defaultData = {
        messages: [['Sheng', 'M', 'Alicante', 'Never allow someone to be your priority while allowing yourself to be their option.', 5],
                    ['Josep', 'M', 'Barcelona', 'An invisible red thread connects those who are destined to meet, regardless of time, place, or circumstance. The thread may stretch or tangle, but will never break.', 3, 'ancient Chinese Proverb'],
                    ['Andrea', 'M', 'Lisbon', 'What matters in life is not to predict the dangers of travels; is to have them made.', 4, 'Agostinho da Silva'],
                    ['Stephanie', 'F', 'Innsbruck', 'Everything is going to be ok in the end, if it\'s not okay it\'s not the end', 5 ],
                    ['Stephanie', 'F', 'Innsbruck', 'f you are brave enough to say goodbye, life will reward you with a new hello', 5 ]
    };
    self.messages = [];
    self.pieces = [];

    self.createMessagesArray(self.defaultData.messages);    
    self.createPiecesArray(self.puzzleWidth, self.cellWidth, self.rowLength);
}

Board.prototype.createMessagesArray = function(arr){
    var self = this;
    arr.forEach(element){
        var message = new CheerUpMessage.apply(null, element)
        self.messages.push(message);
    };
    self.messages.sort(function(a,b){
        return a[4] - b[4]; //sorts by ranking
    });
};

Board.prototype.createPiece = function(i,j){

}

Board.prototype.createPiecesArray = function(puzzleSize, cellSize, rowLength){
    var self = this;
    for(var i=1; i<=rowLength; i++){
        var spanned = 1;
        for(var j=1; j<=rowLength; j++){
            var piece = self.createPiece(spanned,cellSize-2);
            self.pieces.push(piece);
            spanned += cellSize;
        }
    }
}