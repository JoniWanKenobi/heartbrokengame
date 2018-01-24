
//Data   
self.pieces = [];        
self.createPiecesArray(self.puzzleWidth, self.cellWidth, self.rowLength);


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