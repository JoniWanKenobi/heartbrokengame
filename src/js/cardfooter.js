function CardFooter(createFunction, puzzleWidth, cellWidth, rowLength){
    var self = this;
    self.puzzleWidth = 360;
    self.cellWidth = 60;
    self.rowLength = rowLength;
    // self.totalCells = (self.puzzleWidth/self.cellWidth)** don't need this because looping will give me 36 elements anyway
    self.pieces = self.createPiecesArray();        
    
    
    //DOM elements
    self.cardFooterElement = createFunction('<div class="card-footer"></div>');
    self.piecesElement = createFunction('<div class="pieces"></div>');
}


//Data   



CardFooter.prototype.createPiece = function(i,j, id){
    var self = this;
    var positionString = 'background-position: ' + i +'px' + ' ' + j + 'px'; 
    var pieceElement = document.createElement('div');
    pieceElement.setAttribute('class', 'jigsaw-img piece');
    pieceElement.setAttribute('style', positionString);

    var idElement = document.createElement('div');
    idElement.setAttribute('id', 'el-'+ (id + 1));
    idElement.appendChild(pieceElement);
    return idElement;
}

CardFooter.prototype.createPiecesArray = function(){
    var self = this;
    var arr = [];
    for(var i=0; i<=self.puzzleWidth-self.cellWidth; i+=self.cellWidth){        
        for(var j=0; j<=self.puzzleWidth-self.cellWidth; j+=self.cellWidth){
            var piece = self.createPiece(i,j,arr.length);
            arr.push(piece); 
            // arr.push([i,j]);           
        }
    }    

    // return self.shuffle(arr);
    return arr;
}


CardFooter.prototype.shuffle = function (cardsArr) {
    var self = this;
    var copyArr = cardsArr.slice();
    var shuffledArr = [];
    while(copyArr.length>0){
        var ranNum = Math.floor(Math.random() * copyArr.length);
        var el = copyArr.splice(ranNum,1)[0];
        shuffledArr.push(el);
    }

    return shuffledArr;
};